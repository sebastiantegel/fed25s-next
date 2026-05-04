// CRUD-operationer för kommunikation med OMDBapi

import { MovieExt } from "../models/MovieExt";
import { OmdbResponse } from "../models/OmdbResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://omdbapi.com/?apikey=416ed51a&";

export const getMovies = async (searchText: string = "star") => {
  const data = await get<OmdbResponse>(`${BASE_URL}s=${searchText}`);
  localStorage.setItem("movies", JSON.stringify(data.Search));
  return data.Search;
};

export const getMovieById = async (id: string) => {
  return await get<MovieExt>(`${BASE_URL}i=${id}`);
};
