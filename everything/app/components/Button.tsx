"use client";

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const Button = () => {
  // 3. Använd contextet. Detta ger oss ett objekt som innehåller:
  // - currentTheme
  // - dispatch

  // Här tar vi bara emot currentTheme
  const { currentTheme } = useContext(ThemeContext);

  return <button className="bg-theme">{currentTheme}</button>;
};
