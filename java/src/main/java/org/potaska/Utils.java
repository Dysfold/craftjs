package org.potaska;

import java.util.zip.ZipInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.zip.ZipEntry;

public class Utils {
	public static File unzip(File zip, File dir) {
		if (!dir.exists())
			dir.mkdirs();
		FileInputStream fis;
		File baseDir = null;
		// buffer for read and write data to file
		byte[] buffer = new byte[1024];
		try {
			fis = new FileInputStream(zip);
			ZipInputStream zis = new ZipInputStream(fis);
			ZipEntry ze = zis.getNextEntry();
			while (ze != null) {
				String fileName = ze.getName();
				File newFile = dir.toPath().resolve(fileName).toFile();
				if (baseDir == null) {
					baseDir = newFile;
				}
				System.out.println("Unzipping to " + newFile.getAbsolutePath() + ", " + ze.isDirectory());
				// create directories for sub directories in zip
				new File(newFile.getParent()).mkdirs();
				if (ze.isDirectory()) {
					newFile.mkdir();
				} else {
					FileOutputStream fos = new FileOutputStream(newFile);
					int len;
					while ((len = zis.read(buffer)) > 0) {
						fos.write(buffer, 0, len);
					}
					fos.close();
				}
				// close this ZipEntry
				zis.closeEntry();
				ze = zis.getNextEntry();
			}
			// close last ZipEntry
			zis.closeEntry();
			zis.close();
			fis.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return baseDir;
	}
}