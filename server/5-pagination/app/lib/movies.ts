import { OmdbResponse } from "@sebastiantegel/edutypes";

export const searchMovies = async (q: string, page: number) => {
  const response = await fetch(
    `https://omdbapi.com/?apikey=416ed51a&s=${q}&page=${page}`,
  );
  const data: OmdbResponse = await response.json();

  return data;
};
