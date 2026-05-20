"use client";

import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoActionTypes } from "../reducers/TodoReducer";
import { Camera } from "lucide-react";

export const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id} className="flex gap-1 items-center">
          <span className={t.done ? "line-through" : ""}>
            <Camera size={32} strokeWidth={1} color="lightblue" />
            {t.text}
          </span>
          <button
            onClick={() => {
              dispatch({
                type: TodoActionTypes.REMOVED,
                payload: t.id.toString(),
              });
            }}
            className="border border-amber-400 rounded p-2"
          >
            Ta bort
          </button>
          <button
            onClick={() => {
              dispatch({
                type: TodoActionTypes.TOGGLED,
                payload: t.id.toString(),
              });
            }}
            className="border border-emerald-400 rounded p-2"
          >
            Ändra
          </button>
        </li>
      ))}
    </ul>
  );
};
