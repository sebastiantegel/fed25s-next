"use client";

import { Person } from "@/app/models/Person";

type ShowPersonProps = {
  person: Person;
};

export const ShowPerson = ({ person }: ShowPersonProps) => {
  return (
    <div className="person">
      <h3>{person.name}</h3>
      <p>{person.age}</p>
      <input type="checkbox" defaultChecked={person.isMarried} disabled />
    </div>
  );
};
