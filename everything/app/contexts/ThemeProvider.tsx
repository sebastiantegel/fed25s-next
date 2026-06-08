"use client";

import { ReactNode, useReducer } from "react";
import { ThemeContext } from "./ThemeContext";
import { themeReducer } from "../reducers/themeReducer";

type ThemeProviderProps = {
  children: ReactNode;
};

// Syftet med denna komponent är att hålla vårt context och
// kontextets värde.
// Vi skapar ett state för värdet och placerar state-informationen
// i vårt context.
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, dispatch] = useReducer(themeReducer, "night");

  return (
    <ThemeContext.Provider value={{ currentTheme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
