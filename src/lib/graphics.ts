import fs from "fs";
import path from "path";

export type GraphicsCategory = "altiq-ai" | "chainlift" | "aethreon-iq" | "others";

export const GRAPHICS_CATEGORIES: { id: GraphicsCategory; title: string }[] = [
  { id: "altiq-ai", title: "ALTIQ AI" },
  { id: "chainlift", title: "CHAINLIFT" },
  { id: "aethreon-iq", title: "AETHREON IQ" },
  { id: "others", title: "OTHERS" },
];

const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"];

export function getGraphicsForCategory(category: GraphicsCategory): string[] {
  try {
    const dir = path.join(process.cwd(), "public", "work", "graphics", category);
    if (!fs.existsSync(dir)) return [];
    const files = fs.readdirSync(dir);
    return files
      .filter((f) => IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/work/graphics/${category}/${f}`);
  } catch {
    return [];
  }
}

export function getAllGraphics() {
  return GRAPHICS_CATEGORIES.map((cat) => ({
    ...cat,
    images: getGraphicsForCategory(cat.id),
  }));
}
