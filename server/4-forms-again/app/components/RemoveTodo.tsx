"use client";

import { removeTodo } from "../actions/todoActions";

type RemoveTodoProps = {
  id: string;
};

// Ta emot en todos id som props
export const RemoveTodo = ({ id }: RemoveTodoProps) => {
  // Anropa removeTodo (server action) när vi klickar på knappen och skicka id:t dit
  return (
    <button
      onClick={() => {
        // console.log("Ta bort:", id);
        removeTodo(id);
      }}
    >
      Ta bort
    </button>
  );
};
