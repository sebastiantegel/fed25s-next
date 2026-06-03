import { Movie } from "@sebastiantegel/edutypes";

type SearchResultProps = {
  movies: Movie[];
};

export const SearchResult = ({ movies }: SearchResultProps) => {
  return (
    <div>
      {movies.map((m) => (
        <div key={m.imdbID}>{m.Title}</div>
      ))}
    </div>
  );
};
