import { connectDB } from "../lib/db";
import { Todo } from "../models/Todo";
import { RemoveTodo } from "./RemoveTodo";
import { ToggleTodo } from "./ToggleTodo";

export const TodoList = async () => {
  // Anslut till databasen
  await connectDB();

  // Hitta alla todos som finns i databasen
  const todos = await Todo.find();

  // Loopa igenom all todos och visa dem.
  // För varje todo, visa också två client side components: RemoveTodo och ToggleTodo
  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>
          <span className={t.done ? "line-through" : ""}>{t.text}</span>
          <RemoveTodo id={t.id} />
          <ToggleTodo id={t.id} />
        </li>
      ))}
    </ul>
  );
};
