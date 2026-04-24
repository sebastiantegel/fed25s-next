"use client";

import { ChangeEvent, useState } from "react";

export const UserForm = () => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleFirstname = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };

  const handleLastname = (e: ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Submit:", firstname);
        setFirstname("");
        setLastname("");
        setEmail("");
      }}
    >
      <div>
        <label htmlFor="firstname">Förnamn</label>
        <input
          type="text"
          value={firstname}
          onChange={handleFirstname}
          id="firstname"
          placeholder="Sebastian"
          className="bg-amber-200"
        />
      </div>
      <div>
        <label htmlFor="lastname">Efternamn</label>
        <input
          type="text"
          value={lastname}
          onChange={handleLastname}
          id="lastname"
          placeholder="Tegel"
          className="bg-amber-200"
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          value={email}
          onChange={handleEmail}
          id="email"
          placeholder="test@test.com"
          className="bg-amber-200"
        />
      </div>
      <button>Spara</button>
    </form>
  );
};
