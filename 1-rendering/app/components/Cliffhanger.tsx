"use client";

// import { useState } from "react";

export const Cliffhanger = () => {
  let name = "Sebastian";
  //   const [name, setName] = useState("Sebastian");

  const handleClick = () => {
    name = "Hanna";
    // setName("Hanna");
    console.log(name);
  };

  return (
    <>
      <p>{name}</p>
      <button onClick={handleClick}>Ändra</button>
    </>
  );
};
