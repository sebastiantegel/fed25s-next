"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "../lib/db";
import { Todo } from "../models/Todo";
import { v4 as uuidv4 } from "uuid";

export const createTodo = async (formData: FormData) => {
  // Ansluta till databasen
  await connectDB();

  const todoText = formData.get("todotext") as string;

  // TODO: Validering

  // Skapa en todo
  await Todo.create({
    id: uuidv4(),
    text: todoText,
    done: false,
  });

  revalidatePath("/");
};
