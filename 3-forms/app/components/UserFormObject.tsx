"use client";

import { ChangeEvent, useState } from "react";
import { User } from "../models/User";

export const UserFormObject = () => {
  const [user, setUser] = useState<User>(
    new User("", "", "", 0, "", new Date()),
  );
  const [users, setUsers] = useState<User[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.type === "text" ||
      e.target.type === "email" ||
      e.target.type === "color"
    ) {
      setUser({ ...user, [e.target.id]: e.target.value });
    }

    if (e.target.type === "number") {
      setUser({ ...user, [e.target.id]: e.target.valueAsNumber });
    }

    if (e.target.type === "date") {
      setUser({ ...user, [e.target.id]: e.target.valueAsDate });
    }
  };

  const removeUser = (email: string) => {
    setUsers(users.filter((u) => u.email !== email));
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submit:", user);
          setUsers([...users, user]);
          setUser(new User("", "", "", 0, "", new Date()));
        }}
      >
        <div>
          <label htmlFor="firstname">Förnamn</label>
          <input
            type="text"
            value={user.firstname}
            onChange={handleChange}
            id="firstname"
            placeholder="Sebastian"
            className="bg-amber-200"
          />
        </div>
        <div>
          <label htmlFor="lastname">Efternamn</label>
          <input
            type="text"
            value={user.lastname}
            onChange={handleChange}
            id="lastname"
            placeholder="Tegel"
            className="bg-amber-200"
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            value={user.email}
            onChange={handleChange}
            id="email"
            placeholder="test@test.com"
            className="bg-amber-200"
          />
        </div>
        <div>
          <label htmlFor="favNumber">Favvotal</label>
          <input
            type="number"
            value={user.favNumber}
            onChange={handleChange}
            id="favNumber"
            //   placeholder="test@test.com"
            className="bg-amber-200"
          />
        </div>
        <div>
          <label htmlFor="favColor">Favvofärg</label>
          <input
            type="color"
            value={user.favColor}
            onChange={handleChange}
            id="favColor"
            //   placeholder="test@test.com"
            className="bg-amber-200"
          />
        </div>
        <div>
          <label htmlFor="date">Datum</label>
          <input
            type="date"
            value={user.date.toLocaleDateString()}
            onChange={handleChange}
            id="date"
            //   placeholder="test@test.com"
            className="bg-amber-200"
          />
        </div>
        <button>Spara</button>
      </form>
      {/* <div className="wrap-break-word">{JSON.stringify(user)}</div> */}

      <section>
        {users.map((u) => (
          <div key={u.email}>
            <h3>
              {u.firstname} {u.lastname}
            </h3>
            <input type="color" value={u.favColor} disabled />
            <button onClick={() => removeUser(u.email)}>Ta bort</button>
          </div>
        ))}
      </section>
    </>
  );
};
