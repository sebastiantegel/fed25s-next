"use client";

import { useParams } from "next/navigation";

// http://localhost:3000/movies/abc123
//                              ^^^^^^
//                                id
//                       movies/[id]

const MovieDetails = () => {
  const { id } = useParams();

  return <>MovieDetails: {id}</>;
};

export default MovieDetails;
