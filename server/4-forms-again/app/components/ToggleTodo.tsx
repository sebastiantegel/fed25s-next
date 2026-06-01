"use client";

import { toggleTodo } from "../actions/todoActions";

type ToggleTodoProps = {
  id: string;
};

// Ta emot id för vår todo som props
export const ToggleTodo = ({ id }: ToggleTodoProps) => {
  // När vi klickar på knappen, kör server action toggleTodo och skicka id:t dit
  return (
    <button
      onClick={() => {
        toggleTodo(id);
      }}
    >
      Ändra
    </button>
  );
};
