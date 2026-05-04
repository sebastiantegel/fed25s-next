"use client";

import { MovieExt } from "@/app/models/MovieExt";
import { getMovieById } from "@/app/services/movieService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function MovieDetails() {
  const [movie, setMovie] = useState<MovieExt>();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      if (id) {
        const movie = await getMovieById(id as string);
        setMovie(movie);
      }
    };

    if (movie) return;

    getData();
  });

  return (
    <>
      {movie && (
        <div className="movie">
          <h3>{movie.Title}</h3>

          <Image
            alt={movie.Title}
            src={movie.Poster}
            width={100}
            height={100}
            //   style={{ height: "auto", width: "auto" }
          />

          <p>{movie.Plot}</p>
          <p>{movie.Actors}</p>
          <p>{movie.Runtime} min</p>
        </div>
      )}
    </>
  );
}
