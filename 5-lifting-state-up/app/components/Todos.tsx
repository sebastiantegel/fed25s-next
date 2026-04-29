"use client";

import { Todo } from "../models/Todo";
import { TodoPresentation } from "./TodoPresentation";

type TodosProps = {
  todos: Todo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  toggleEditing: (id: number) => void;
  saveTodo: (id: number, newText: string) => void;
};

export const Todos = ({
  todos,
  removeTodo,
  toggleTodo,
  toggleEditing,
  saveTodo,
}: TodosProps) => {
  return (
    <ul>
      {todos.map((t) => (
        <TodoPresentation
          key={t.id}
          todo={t}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          toggleEditing={toggleEditing}
          saveTodo={saveTodo}
        />
      ))}
    </ul>
  );
};
