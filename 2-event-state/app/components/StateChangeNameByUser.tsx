"use client";

import { useState } from "react";

export const StateChangeNameByUser = () => {
  const [name, setName] = useState<string>("Sebastian");
  const [userInput, setUserInput] = useState<string>("");

  const handleClick = () => {
    setName(userInput);
  };

  return (
    <>
      <p>{name}</p>
      <input
        type="text"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <button onClick={handleClick}>Ändra</button>
    </>
  );
};
