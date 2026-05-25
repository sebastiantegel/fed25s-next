"use client";

import { useState } from "react";
import { Todo } from "../models/Todo";
import { Button, ButtonType } from "./Button";

type TodoPresentationProps = {
  todo: Todo;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  toggleEditing: (id: number) => void;
  saveTodo: (id: number, newText: string) => void;
};

export const TodoPresentation = ({
  todo,
  removeTodo,
  toggleTodo,
  toggleEditing,
  saveTodo,
}: TodoPresentationProps) => {
  const [editingText, setEditingText] = useState<string>(todo.text);

  if (!todo.isEditing) {
    return (
      <li>
        <h4 className={todo.isDone ? "line-through" : ""}>{todo.text}</h4>
        <Button
          onClick={() => removeTodo(todo.id)}
          buttonType={ButtonType.remove}
        >
          Ta bort
        </Button>
        <Button
          onClick={() => toggleTodo(todo.id)}
          buttonType={ButtonType.toggle}
        >
          Ändra
        </Button>
        <Button onClick={() => toggleEditing(todo.id)}>Redigera</Button>
      </li>
    );
  }

  return (
    <div>
      <input
        type="text"
        value={editingText}
        onChange={(e) => setEditingText(e.target.value)}
      />
      <Button
        buttonType={ButtonType.save}
        onClick={() => saveTodo(todo.id, editingText)}
      >
        Spara
      </Button>
      <Button
        buttonType={ButtonType.default}
        onClick={() => toggleEditing(todo.id)}
      >
        Ångra
      </Button>
    </div>
  );
};
