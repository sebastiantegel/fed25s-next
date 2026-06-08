"use client";

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { themes } from "../models/Theme";

export const ThemeSelector = () => {
  // 3. Använd contextet. Detta ger oss ett objekt som innehåller:
  // - currentTheme
  // - dispatch

  // Här tar vi bara emot dispatch
  const { dispatch } = useContext(ThemeContext);

  return (
    <>
      <ul>
        {themes.map((t) => (
          <li
            key={t.value}
            onClick={() => {
              // Anropa dispatch för att ändra vårt state (currentTheme)
              // till värdet (value) som finns i objektet t som är ett Theme
              dispatch({
                type: "changeTheme",
                payload: t.value,
              });
            }}
          >
            {t.name}
          </li>
        ))}
      </ul>
    </>
  );
};
