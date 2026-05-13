"use client";

import { TodosContext } from "@/app/contexts/TodosContext";
import { useContext } from "react";
import { TodoPresentation } from "./TodoPresentation";

export const Todos = () => {
  const { todos } = useContext(TodosContext);

  return (
    <ul>
      {todos.map((t) => (
        <TodoPresentation key={t.id} todo={t} />
      ))}
    </ul>
  );
};
