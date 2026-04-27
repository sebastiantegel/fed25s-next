"use client";

import { Person } from "@/app/models/Person";
import { ChangeEvent, useState } from "react";

type AddPersonProps = {
  addPerson: (person: Person) => void;
};

export const AddPerson = ({ addPerson }: AddPersonProps) => {
  const [person, setPerson] = useState<Person>(new Person("", 0, false));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "text") {
      setPerson({ ...person, [e.target.id]: e.target.value });
    }

    if (e.target.type === "number") {
      setPerson({ ...person, [e.target.id]: e.target.valueAsNumber });
    }

    if (e.target.type === "checkbox") {
      setPerson({ ...person, [e.target.id]: e.target.checked });
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        //setPersons([...persons, person]);
        addPerson(person);
        setPerson(new Person("", 0, false));
      }}
    >
      <input
        type="text"
        value={person.name}
        onChange={handleChange}
        id="name"
      />
      <input
        type="number"
        value={person.age}
        onChange={handleChange}
        id="age"
      />
      <input
        type="checkbox"
        checked={person.isMarried}
        onChange={handleChange}
        id="isMarried"
      />
      <button>Spara</button>
    </form>
  );
};
