import { MovieExt } from "@/app/models/MovieExt";
import Image from "next/image";

type MovieDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function MovieDetails({ params }: MovieDetailsProps) {
  const { id } = await params;

  const response = await fetch(`https://omdbapi.com/?apikey=416ed51a&i=${id}`);
  const data: MovieExt = await response.json();

  return (
    <div>
      <h3>{data.Title}</h3>
      <div>
        <Image src={data.Poster} width={100} height={100} alt={data.Title} />
      </div>
      <p>Plot: {data.Plot}</p>
      <p>Actors: {data.Actors}</p>
    </div>
  );
}
