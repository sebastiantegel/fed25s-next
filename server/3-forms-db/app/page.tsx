import { createTodo } from "./actions/todoActions";
import { connectDB } from "./lib/db";
import { Todo } from "./models/Todo";

export default async function Home() {
  await connectDB();
  const todos = await Todo.find();

  return (
    <>
      <form action={createTodo}>
        <label htmlFor="todo">Todo: </label>
        <input type="text" id="todo" name="todotext" />
        <button>Spara</button>
      </form>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </>
  );
}
