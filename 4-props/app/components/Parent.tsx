"use client";

import { useState } from "react";
import { Child } from "./Child";
import { Person } from "../models/Person";

export const Parent = () => {
  const [person, setPerson] = useState<Person>({
    name: "Sebastian",
    age: 46,
    isMarried: true,
  });

  return (
    <>
      <h2>Parent</h2>
      <Child name="Sebastian" age={46} person={person} />
    </>
  );
};
