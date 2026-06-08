"use client";

import { ReactNode, useReducer } from "react";
import { ThemeContext } from "./ThemeContext";
import { themeReducer } from "../reducers/themeReducer";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, dispatch] = useReducer(themeReducer, "night");

  return (
    <ThemeContext.Provider value={{ currentTheme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
