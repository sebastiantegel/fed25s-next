"use client";

import { useEffect, useState } from "react";
import { getMovies } from "../services/movieService";
import { Movie } from "../models/Movie";
import Image from "next/image";
import Link from "next/link";
import { useMovies } from "../hooks/useMovies";
import { useFetch } from "../hooks/useFetch";
import { OmdbResponse } from "../models/OmdbResponse";

export default function Movies() {
  const [searchText, setSearchText] = useState<string>("");
  const [loading, movies, searchMovies] = useMovies();
  //   const [loading, movies] = useFetch<OmdbResponse>(
  //     "https://omdbapi.com/?apikey=416ed51a&s=star",
  //   );

  //   const [movies, setMovies] = useState<Movie[]>(
  //     JSON.parse(localStorage.getItem("movies") || "[]"),
  //   );

  //   useEffect(() => {
  //     const getData = async () => {
  //       const movies = await getMovies();
  //       setMovies(movies);
  //     };

  //     if (movies.length > 0) return;

  //     getData();
  //   });

  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              searchMovies(searchText);

              setSearchText("");
              //   setMovies(movies);
            }}
          >
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button>Sök</button>
          </form>
          <section className="flex flex-wrap justify-between mt-4 gap-4">
            {movies.map((m) => (
              <div
                key={m.imdbID}
                className="movie w-50 border border-gray-400 flex flex-col items-center p-4 rounded"
              >
                <h3>{m.Title}</h3>
                {/* <img src={m.Poster} alt={m.Title} /> */}
                <Image
                  alt={m.Title}
                  src={m.Poster}
                  width={100}
                  height={100}
                  //   style={{ height: "auto", width: "auto" }
                />
                <Link href={`/movies/${m.imdbID}`}>Läs mer</Link>
              </div>
            ))}
          </section>
        </>
      )}
    </>
  );
}
