"use client";

import { useState } from "react";
import { TodosContext, TodosContextType } from "../contexts/TodosContext";
import { Todo } from "@sebastiantegel/edutypes";
import { AddTodo } from "../components/todos/AddTodo";
import { Todos } from "../components/todos/Todos";

export default function TodoApp() {
  const [context, setContext] = useState<TodosContextType>({
    todos: [],
    addTodo: (text: string) => {
      setContext((prev) => ({
        ...prev,
        todos: [...prev.todos, new Todo(text)],
      }));
    },
    removeTodo: (id: number) => {
      setContext((prev) => ({
        ...prev,
        todos: prev.todos.filter((t) => t.id !== id),
      }));
    },
  });

  return (
    <TodosContext.Provider value={context}>
      <AddTodo />
      <Todos />
    </TodosContext.Provider>
  );
}
