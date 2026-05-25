import { OmdbResponse } from "@sebastiantegel/edutypes";
import Image from "next/image";
import { sleep } from "../lib/sleep";
import Link from "next/link";

export default async function Movies() {
  await sleep(5000);
  const response = await fetch("https://omdbapi.com/?apikey=416ed51a&s=star");
  const data: OmdbResponse = await response.json();

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {data.Search.map((movie) => (
        <div
          key={movie.imdbID}
          className="border border-black-200 flex flex-col justify-between items-center max-w-50 p-5"
        >
          <h3 className="">{movie.Title}</h3>
          <div>
            <Image
              src={movie.Poster}
              alt={movie.Title}
              width={200}
              height={200}
            />
          </div>
          <Link href={`/movies/${movie.imdbID}`}>Läs mer...</Link>
        </div>
      ))}
    </div>
  );
}
