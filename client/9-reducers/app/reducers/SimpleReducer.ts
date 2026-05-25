type SimpleReducerAction = {
  type: string;
  payload: string;
};

export const SimpleReducer = (
  greeting: string,
  action: SimpleReducerAction,
) => {
  if (action.type === "modify") {
    return action.payload; // greeting = action.payload
  }

  return greeting; // greeting = greeting
};
