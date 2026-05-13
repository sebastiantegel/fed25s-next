"use client";

import { TodosContext } from "@/app/contexts/TodosContext";
import { Todo } from "@sebastiantegel/edutypes";
import { useContext } from "react";

type TodoPresentationProps = {
  todo: Todo;
};

export const TodoPresentation = ({ todo }: TodoPresentationProps) => {
  const { removeTodo } = useContext(TodosContext);

  return (
    <li className="flex gap-2 items-center">
      <span>{todo.text}</span>
      <button
        className="border border-grey rounded p-1 cursor-pointer"
        onClick={() => removeTodo(todo.id)}
      >
        Ta bort
      </button>
    </li>
  );
};
