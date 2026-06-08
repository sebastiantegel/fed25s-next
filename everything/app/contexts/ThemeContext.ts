import { createContext, Dispatch } from "react";
import { ThemeAction } from "../reducers/themeReducer";

export type ThemeContextType = {
  currentTheme: string;
  dispatch: Dispatch<ThemeAction>;
};

// 1. Skapa context
export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "day",
  dispatch: () => {},
});
