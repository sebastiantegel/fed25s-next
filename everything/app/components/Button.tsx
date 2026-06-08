"use client";

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const Button = () => {
  const { currentTheme } = useContext(ThemeContext);

  return <button className="bg-theme">{currentTheme}</button>;
};
