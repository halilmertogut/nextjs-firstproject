"use server";

import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

function isInvalidEmail(text) {
  return !text || !text.includes("@");
}

export async function submitMeal(formData) {
  "use server";
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidEmail(meal.creator_email) ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error("Invalid input!");
  }
  await saveMeal(meal);
  redirect("/meals");
}
