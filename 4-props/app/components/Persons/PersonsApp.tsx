"use client";

import { Person } from "@/app/models/Person";
import { useState } from "react";
import { Persons } from "./Persons";
import { AddPerson } from "./AddPerson";

export const PersonsApp = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  const savePerson = (person: Person) => {
    setPersons([...persons, person]);
  };

  return (
    <>
      <AddPerson addPerson={savePerson} />
      <Persons persons={persons} />
    </>
  );
};
