import { Movie } from "@sebastiantegel/edutypes";

export type MovieExt = Movie & {
  Plot: string;
  Runtime: string;
  Actors: string;
};
