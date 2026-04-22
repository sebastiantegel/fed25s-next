"use client";

import { useState } from "react";
import { Person } from "../models/Person";

export const StateObject = () => {
  const [person, setPerson] = useState<Person>(
    new Person("Sebastian", 46, true),
  );

  const handleClick = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <>
      <div>
        <h3>{person.name}</h3>
        <p>{person.age}</p>
        <input type="checkbox" defaultChecked={person.isMarried} disabled />
        <button onClick={handleClick}>Fyll år</button>
      </div>
    </>
  );
};
