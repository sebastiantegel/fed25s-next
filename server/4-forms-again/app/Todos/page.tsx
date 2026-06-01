import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";

export default function TodosPage() {
  // Visa komponenter för denna route (/todos)
  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  );
}
