package org.potaska;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Stream;

import org.bukkit.Bukkit;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.plugin.java.JavaPlugin;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.PolyglotException;
import org.graalvm.polyglot.Source;
import org.h2.mvstore.MVStore;

public class JSPlugin extends JavaPlugin {
	private static JSPlugin instance;

	public static JSPlugin getInstance() {
		Objects.requireNonNull(instance, "instance not yet available");
		return instance;
	}

	/**
	 * GraalJS context.
	 */
	private Context ctx;

	private List<String> foldersToImport = Arrays.asList(new String[] { "internal", "types", "plugins" });

	private Map<String, MVStore> openDbs = new HashMap<>();

	public void refresh() {
		Bukkit.getPluginManager().disablePlugin(this);
		Bukkit.getPluginManager().enablePlugin(this);
	}

	/**
	 * Schedules a task once.
	 * @param task Task to run.
	 * @param delay Delay in ticks.
	 * @return Id of new task.
	 */
	public int scheduleOnce(Runnable task, long delay) {
		if (delay == 0) {
			return Bukkit.getScheduler().scheduleSyncDelayedTask(this, task);
		} else {
			return Bukkit.getScheduler().scheduleSyncDelayedTask(this, task, delay);
		}
	}

	/**
	 * Schedules a repeating task.
	 * @param task Task to run.
	 * @param delay Initial delay.
	 * @param period Time between executions.
	 * @return Id of new task.
	 */
	public int scheduleRepeating(Runnable task, long delay, long period) {
		return Bukkit.getScheduler().scheduleSyncRepeatingTask(this, task, delay, period);
	}

	/**
	 * Opens a database.
	 * @param name Database name.
	 * @return New database.
	 */
	public MVStore openDatabase(String name) {
		return openDbs.computeIfAbsent(name, MVStore::open);
	}

	@Override
	public void onEnable() {
		this.saveDefaultConfig();
		FileConfiguration config = this.getConfig();

		List<Map<?, ?>> map = config.getMapList("graal-options");
		String mainDir = config.getString("js-directory", "js");
		String entryFile = config.getString("entry-file", "internal/init.js");
		String jsZip = config.getString("js-zip");

		try {
			Map<String, String> options = new HashMap<String, String>();
			for (Map<?, ?> entry : map) {
				String name = String.valueOf(entry.get("name"));
				String value = String.valueOf(entry.get("value"));
				if (name == null || value == null) {
					continue;
				}
				options.put(name, value);
			}

			Path dir = Paths.get(mainDir);

			if (!Files.exists(dir)) {
				Path zipPath = Files.createTempFile("craftjs", ".zip");
				Path tmpDir = Files.createTempDirectory("craftjs");
				Files.createDirectories(dir);
				URL zipUrl = new URL(jsZip);
				ReadableByteChannel rbc = Channels.newChannel(zipUrl.openStream());
				FileOutputStream os = new FileOutputStream(zipPath.toFile());
				os.getChannel().transferFrom(rbc, 0, Long.MAX_VALUE);

				Path root = Utils.unzip(zipPath.toFile(), tmpDir.toFile()).toPath();
				Stream<Path> files = Files.list(root);
				files.forEach(file -> {
					Path rel = root.relativize(file);
					Path folder = rel.subpath(0, 1);
					if (!foldersToImport.contains(folder.toString().toLowerCase())) {
						return;
					}
					Path target = dir.resolve(rel);
					System.out.println(rel + ", " + folder + ", " + target);
					try {
						Files.move(file, target);
					} catch (IOException e) {
						e.printStackTrace();
					}
				});
				files.close();
			}

			Path entry = Paths.get(mainDir, entryFile);

			Files.createDirectories(entry.getParent());
			File initFile = entry.toFile();
			initFile.createNewFile();

			ctx = Context.newBuilder("js").allowExperimentalOptions(true).allowIO(true).allowHostAccess(HostAccess.ALL)
					.allowHostClassLookup(className -> true).options(options).build();
			ctx.getBindings("js").putMember("__ctx", ctx);
			ctx.getBindings("js").putMember("__plugin", this);
			ctx.eval(Source.newBuilder("js", initFile).build());
		} catch (PolyglotException | IOException e) {
			System.out.println(e);
		}

		instance = this;
	}

	@Override
	public void onDisable() {
		ctx.close();
	}
}
