"use client";

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { themes } from "../models/Theme";

export const ThemeSelector = () => {
  const { currentTheme, dispatch } = useContext(ThemeContext);

  return (
    <>
      <ul>
        {themes.map((t) => (
          <li
            key={t.value}
            onClick={() =>
              dispatch({
                type: "changeTheme",
                payload: t.value,
              })
            }
          >
            {t.name}
          </li>
        ))}
      </ul>
    </>
  );
};
