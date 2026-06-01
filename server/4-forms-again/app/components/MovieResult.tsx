import { OmdbResponse } from "@sebastiantegel/edutypes";

type MovieResultProps = {
  query: string;
};

export const MovieResult = async ({ query }: MovieResultProps) => {
  // Hämta filmer från omdb baserat på query (querystringen q) från parent
  const response = await fetch(
    `https://omdbapi.com/?apikey=416ed51a&s=${query || "star"}`,
  );
  const data: OmdbResponse = await response.json();

  // Loopa igenom resultatet och visa det
  return (
    <div>
      {data.Search.map((m) => (
        <div key={m.imdbID}>{m.Title}</div>
      ))}
    </div>
  );
};
