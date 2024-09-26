import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import path from 'path';

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error('Failed to get Meals');
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });

  meal.instructions = xss(meal.instructions);

  const extensions = meal.image.name.split(".").pop();

  const fileName = `${meal.slug}.${extensions}`;

  const imagePath = path.join(process.cwd(), "public", "images", fileName);

  try {
    const bufferedImage = await meal.image.arrayBuffer();
    const imageBuffer = Buffer.from(bufferedImage);

    await fs.promises.writeFile(imagePath, imageBuffer);

    meal.image = `/images/${fileName}`;
  } catch (error) {
    console.error("Error saving image:", error);
    throw new Error("Failed to save the image.");
  }

  try {
    const stmt = db.prepare(`
        INSERT INTO meals
        (slug, title, image, summary, instructions, creator, creator_email)
        VALUES (
          @slug, 
          @title, 
          @image, 
          @summary, 
          @instructions, 
          @creator, 
          @creator_email
        )
      `);

    stmt.run({
      slug: meal.slug,
      title: meal.title,
      image: meal.image,
      summary: meal.summary,
      instructions: meal.instructions,
      creator: meal.creator,
      creator_email: meal.creator_email,
    });
  } catch (error) {
    console.error("Error inserting meal into database:", error);
    throw new Error("Failed to save the meal.");
  }
}
