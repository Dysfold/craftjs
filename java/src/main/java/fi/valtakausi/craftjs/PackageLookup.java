package fi.valtakausi.craftjs;

import java.lang.invoke.MethodHandles;
import java.lang.invoke.VarHandle;
import java.util.HashSet;
import java.util.Set;

import org.bukkit.plugin.Plugin;
import org.bukkit.plugin.java.JavaPlugin;

/**
 * Finds Java packages that should be callable by JS code.
 *
 */
public class PackageLookup {
	
	private static final VarHandle PLUGIN_CLASS_LOADER;
	
	static {
		VarHandle handle;
		try {
			handle = MethodHandles.privateLookupIn(JavaPlugin.class, MethodHandles.lookup())
					.findVarHandle(JavaPlugin.class, "classLoader", ClassLoader.class);
		} catch (NoSuchFieldException | IllegalAccessException e) {
			handle = null; // Warning will be printed if addPluginPackages() is called
		}
		PLUGIN_CLASS_LOADER = handle;
	}

	public static PackageLookup create(Plugin[] plugins) {
		PackageLookup lookup = new PackageLookup();
		lookup.addSelfPackages();
		lookup.addPluginPackages(plugins);
		return lookup;
	}
	
	/**
	 * Existing packages.
	 */
	private final Set<String> packages;
	
	private PackageLookup() {
		this.packages = new HashSet<>();
	}
	
	public boolean exists(String pkg) {
		return packages.contains(pkg);
	}
	
	private void addSelfPackages() {
		for (Package pkg : Package.getPackages()) {
			packages.add(pkg.getName());
		}
	}
	
	private void addPluginPackages(Plugin[] plugins) {
		if (PLUGIN_CLASS_LOADER == null) {
			// TODO print warning
			return;
		}
		for (Plugin plugin : plugins) {
			if (plugin instanceof JavaPlugin) {
				ClassLoader loader = (ClassLoader) PLUGIN_CLASS_LOADER.get(plugin);
				for (Package pkg : loader.getDefinedPackages()) {
					packages.add(pkg.getName());
				}
			}
		}
	}
}
