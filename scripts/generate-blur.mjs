import sharp from "sharp";

const images = [
  "public/images/home/05.webp",
  "public/images/home/07.webp",
  "public/images/home/08.webp",
  "public/images/home/homebg.webp",
  "public/images/home/homebgsmall.webp",
];

for (const src of images) {
  const buf = await sharp(src)
    .resize(10, 10, { fit: "cover" })
    .webp({ quality: 20 })
    .toBuffer();
  const b64 = `data:image/webp;base64,${buf.toString("base64")}`;
  console.log(`${src}:\n${b64}\n`);
}
