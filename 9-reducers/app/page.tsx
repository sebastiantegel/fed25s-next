"use client";

import { useReducer, useState } from "react";
import { SimpleReducer } from "./reducers/SimpleReducer";
import { TodoActionTypes, TodoReducer } from "./reducers/TodoReducer";

export default function Home() {
  const [greeting, dispatch] = useReducer(SimpleReducer, "Lorem ipsum");
  const [todos, todoDispatch] = useReducer(TodoReducer, []);
  const [userInput, setUserInput] = useState("");

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <p>{greeting}</p>
        <button
          onClick={() => {
            dispatch({ type: "modify", payload: "Hello world!" });
          }}
        >
          Ändra
        </button>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            todoDispatch({
              type: TodoActionTypes.ADDED,
              payload: userInput,
            });
          }}
        >
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button>Spara</button>
        </form>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span className={todo.done ? "line-through" : ""}>
                {todo.text}
              </span>
              <button
                onClick={() => {
                  todoDispatch({
                    type: TodoActionTypes.REMOVED,
                    payload: todo.id.toString(),
                  });
                }}
              >
                Ta bort
              </button>
              <button
                onClick={() => {
                  todoDispatch({
                    type: TodoActionTypes.TOGGLED,
                    payload: todo.id.toString(),
                  });
                }}
              >
                Ändra
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
