import { Movie } from "./Movie";

export type MovieExt = Movie & {
  Plot: string;
  Actors: string;
  Runtime: string;
};
