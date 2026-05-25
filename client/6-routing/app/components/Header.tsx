"use client";

import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav className="w-full bg-amber-600 h-18.75">
        <ul className="flex justify-end p-0.5 gap-2 mr-1 items-center h-full">
          <li>
            <Link href={"/"}>Hem</Link>
          </li>
          <li>
            <Link href={"/about"}>Om</Link>
          </li>
          <li>
            <Link href={"/contact"}>Kontakt</Link>
          </li>
          <li>
            <Link href={"/movies"}>Filmer</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
