"use client";

import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoActionTypes } from "../reducers/TodoReducer";

export const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const { dispatch } = useContext(TodoContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: TodoActionTypes.ADDED,
          payload: todoText,
        });
        setTodoText("");
      }}
    >
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button>Spara</button>
    </form>
  );
};
