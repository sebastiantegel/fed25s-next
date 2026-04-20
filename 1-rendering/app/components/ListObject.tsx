"use client";

import { Person } from "../models/Person";

export const ListObject = () => {
  const persons: Person[] = [
    new Person("Sebastian", 46, true),
    new Person("Hanna", 45, true),
    new Person("Astrid", 15, false),
    new Person("Alvar", 15, false),
  ];

  return (
    <div className="flex justify-between w-full">
      {persons.map((p) => (
        <div key={p.name} className="border border-amber-300 rounded-2xl p-4">
          <h3>{p.name}</h3>
          <p>{p.age}</p>
          <input type="checkbox" defaultChecked={p.isMarried} />
        </div>
      ))}
    </div>
  );
};
