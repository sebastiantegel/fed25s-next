"use client";

import { useState } from "react";
import { Person } from "../models/Person";

export const StateList = () => {
  const [persons, setPersons] = useState<Person[]>([
    new Person("Sebastian", 46, true),
  ]);

  // 1. Lägg till i listan
  const addPerson = () => {
    setPersons([...persons, new Person("Hanna", 45, true)]);
  };

  // 2. Ta bort ur listan
  const removePerson = (name: string) => {
    setPersons(persons.filter((p) => p.name !== name));
  };

  // 3. Ändra i listan
  //   const handleBirthday = (name: string) => {
  //     setPersons(
  //       persons.map((p) => {
  //         if (p.name === name) return { ...p, age: p.age + 1 };
  //         return p;
  //       }),
  //     );
  //   };

  const handleBirthday = (name: string) => {
    setPersons(
      persons.map((p) => (p.name === name ? { ...p, age: p.age + 1 } : p)),
    );
  };

  return (
    <>
      <button onClick={addPerson}>Lägg till</button>
      <div>
        {persons.map((p) => (
          <div key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.age}</p>
            <input type="checkbox" defaultChecked={p.isMarried} disabled />
            <div>
              <button
                onClick={() => {
                  removePerson(p.name);
                }}
              >
                Ta bort
              </button>
              <button
                onClick={() => {
                  handleBirthday(p.name);
                }}
              >
                Fyll år
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
