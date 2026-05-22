import { OmdbResponse } from "@sebastiantegel/edutypes";
import Link from "next/link";

export default async function Movies() {
  const response = await fetch("https://omdbapi.com/?apikey=416ed51a&s=star");
  const data: OmdbResponse = await response.json();

  return (
    <div>
      {data.Search.map((m) => (
        <div key={m.imdbID}>
          <h3>{m.Title}</h3>
          <Link href={`/movies/${m.imdbID}`}>Läs mer...</Link>
        </div>
      ))}
    </div>
  );
}
