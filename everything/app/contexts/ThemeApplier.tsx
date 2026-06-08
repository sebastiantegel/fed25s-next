"use client";

import { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeApplier = () => {
  const { currentTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return null;
};
