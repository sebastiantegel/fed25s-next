"use client";

import { useReducer } from "react";
import { TodoReducer } from "../reducers/TodoReducer";
import { Todos } from "../components/Todos";
import { TodoContext } from "../contexts/TodoContext";
import { AddTodo } from "../components/AddTodo";

export default function TodoApp() {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <AddTodo />
      <Todos />
    </TodoContext.Provider>
  );
}
