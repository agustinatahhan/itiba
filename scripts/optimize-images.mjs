import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import { join, extname, basename } from "path";

const dirs = [
  "public/images/gallery",
  "public/images/home",
  "public/images/projects",
  "public/images/about",
  "public/images/origin",
];

const QUALITY = 75;

for (const dir of dirs) {
  let files;
  try {
    files = await readdir(dir);
  } catch {
    continue;
  }

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

    const input = join(dir, file);
    const output = join(dir, basename(file, ext) + ".webp");

    try {
      await sharp(input).webp({ quality: QUALITY }).toFile(output);
      const { size: before } = await import("fs").then((m) =>
        m.statSync(input)
      );
      const { size: after } = await import("fs").then((m) =>
        m.statSync(output)
      );
      console.log(
        `✓ ${file} → ${basename(output)}  ${(before / 1e6).toFixed(1)}MB → ${(after / 1e6).toFixed(1)}MB`
      );
      await unlink(input);
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
    }
  }
}
