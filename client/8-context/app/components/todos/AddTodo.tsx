"use client";

import { TodosContext } from "@/app/contexts/TodosContext";
import { useContext, useState } from "react";

export const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const { addTodo } = useContext(TodosContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(todoText);
        setTodoText("");
      }}
    >
      <label htmlFor="todotext">Todo:</label>
      <input
        type="text"
        id="todotext"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button>Spara</button>
    </form>
  );
};
