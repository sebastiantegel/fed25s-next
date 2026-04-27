"use client";

import { Person } from "@/app/models/Person";
import { ShowPerson } from "./ShowPerson";

type PersonsProps = {
  persons: Person[];
};

export const Persons = ({ persons }: PersonsProps) => {
  return (
    <>
      <div className="persons">
        {persons.map((p) => (
          <ShowPerson person={p} key={p.name} />
        ))}
      </div>
    </>
  );
};
