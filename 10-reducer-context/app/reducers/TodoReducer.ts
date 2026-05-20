import { Todo } from "@sebastiantegel/edutypes";

export enum TodoActionTypes {
  ADDED,
  REMOVED,
  TOGGLED,
}

export type TodoAction = {
  type: TodoActionTypes;
  payload: string;
};

export const TodoReducer = (todos: Todo[], action: TodoAction) => {
  switch (action.type) {
    case TodoActionTypes.ADDED:
      return [...todos, new Todo(action.payload)];

    case TodoActionTypes.REMOVED:
      return todos.filter((t) => t.id !== +action.payload);

    case TodoActionTypes.TOGGLED:
      return todos.map((t) => {
        if (t.id === +action.payload) {
          return { ...t, done: !t.done };
        }
        return t;
      });

    default:
      return todos;
  }
};
