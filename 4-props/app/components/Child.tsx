import { Person } from "../models/Person";

type ChildProps = {
  name: string;
  age: number;
  person: Person;
};

export const Child = ({ person }: ChildProps) => {
  return <>Child: {person.name}</>;
};
