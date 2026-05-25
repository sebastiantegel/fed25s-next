"use client";

import { useState } from "react";

export const State = () => {
  const [name, setName] = useState<string>("Sebastian");

  const handleClick = () => {
    setName("Hanna");
  };

  console.log(name);
  return (
    <>
      <p>{name}</p>
      <button onClick={handleClick}>Ändra</button>
    </>
  );
};
