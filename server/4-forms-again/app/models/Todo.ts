import { model, models, Schema } from "mongoose";

const todoSchema = new Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
  done: { type: Boolean, required: true },
});

export const Todo = models.todo || model("todo", todoSchema);
