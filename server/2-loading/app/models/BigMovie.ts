import { Movie } from "@sebastiantegel/edutypes";
import { Rating } from "./Rating";

export type BigMovie = Movie & {
  Plot: string;
  Actors: string;
  Ratings: Rating[];
};
