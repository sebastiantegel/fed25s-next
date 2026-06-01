import { createTodo } from "../actions/todoActions";

export const AddTodo = () => {
  // Vid submit kör funktionen createTodo
  return (
    <form action={createTodo}>
      <input type="text" name="todotext" />
      <button>Spara</button>
    </form>
  );
};
