// En reducer måste ta emot:
// Ett state
// Ett action-objekt (som beskriver en förändring av statet)

// En reducer måste alltid returnera ett nytt state

export type ThemeAction = {
  type: string;
  payload: string;
};

export const themeReducer = (theme: string, action: ThemeAction) => {
  if (action.type === "changeTheme") {
    return action.payload;
  }

  return theme;
};
