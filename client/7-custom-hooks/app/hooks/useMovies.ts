import { useEffect, useState } from "react";
import { getMovies } from "../services/movieService";
import { Movie } from "../models/Movie";

export const useMovies = (): [boolean, Movie[], (s: string) => void] => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const movies = await getMovies();
        setMovies(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (movies.length > 0) return;
    getData();
  });

  const searchMovies = async (search: string) => {
    const movies = await getMovies(search);
    setMovies(movies);
  };

  return [loading, movies, searchMovies];
};
