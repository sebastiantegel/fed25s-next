"use client";

import { useState } from "react";
import { Button, ButtonType } from "./Button";

type AddTodProps = {
  createTodo: (todoText: string) => void;
};

export const AddTodo = ({ createTodo }: AddTodProps) => {
  const [userInput, setUserInput] = useState<string>("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createTodo(userInput);
        setUserInput("");
      }}
    >
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      {/* <button>Spara</button> */}
      <Button buttonType={ButtonType.save}>Spara</Button>
    </form>
  );
};
