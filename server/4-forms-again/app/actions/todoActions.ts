"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "../lib/db";
import { Todo } from "../models/Todo";
import { v4 as uuidv4 } from "uuid";

export const createTodo = async (formData: FormData) => {
  // Connect to db
  await connectDB();

  // Mutate data
  const todoText = formData.get("todotext") as string;

  await Todo.create({
    id: uuidv4(),
    text: todoText,
    done: false,
  });

  // revalidatePath
  revalidatePath("/Todos");
};

export const removeTodo = async (id: string) => {
  await connectDB();

  await Todo.deleteOne({ id });

  revalidatePath("/todos");
};

export const toggleTodo = async (id: string) => {
  await connectDB();

  const found = await Todo.findOne({ id });
  await Todo.updateOne({ id }, { done: !found.done });

  revalidatePath("/todos");
};
