"use client";

import { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeApplier = () => {
  // 3. Använd contextet vilket kommer att ge oss ett objekt som innehåller:
  // - currentTheme
  // - dispatch

  // Här tar vi bara emot currentTheme så att vi kan skriva ut
  // namnet på temat i attributet data-theme
  const { currentTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return null;
};
