"use client";

import { useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([new Todo("Next.js ftw!")]);

  const addTodo = (todoText: string) => {
    setTodos([...todos, new Todo(todoText)]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      }),
    );
  };

  const toggleEditing = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: !todo.isEditing };
        }
        return todo;
      }),
    );
  };

  const saveTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: !todo.isEditing, text: newText };
        }
        return todo;
      }),
    );
  };

  return (
    <>
      <AddTodo createTodo={addTodo} />
      <Todos
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        toggleEditing={toggleEditing}
        saveTodo={saveTodo}
      />
    </>
  );
};
