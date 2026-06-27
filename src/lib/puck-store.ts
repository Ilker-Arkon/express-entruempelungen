import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "src/data/pages");

export async function getPageData(slug: string) {
  try {
    const filePath = path.join(DATA_DIR, `${slug}.json`);
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
}

export async function savePageData(slug: string, data: any) {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const filePath = path.join(DATA_DIR, `${slug}.json`);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Failed to save page data", error);
    return false;
  }
}

export async function getAllPages() {
  try {
    const files = await fs.readdir(DATA_DIR);
    return files
      .filter((file) => file.endsWith(".json"))
      .map((file) => file.replace(".json", ""));
  } catch (error) {
    return [];
  }
}
