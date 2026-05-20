import { Todo } from "@sebastiantegel/edutypes";
import { createContext, Dispatch } from "react";
import { TodoAction } from "../reducers/TodoReducer";

type TodoContextType = {
  todos: Todo[];
  dispatch: Dispatch<TodoAction>;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  dispatch: () => {},
});
