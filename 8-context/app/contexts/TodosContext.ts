import { Todo } from "@sebastiantegel/edutypes";
import { createContext } from "react";

export type TodosContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
};

export const TodosContext = createContext<TodosContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});
