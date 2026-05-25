import Image from "next/image";
import { sleep } from "../lib/sleep";
import { BigMovie } from "../models/BigMovie";

type MovieDetailsProps = {
  id: string;
};

export const MovieDetails = async ({ id }: MovieDetailsProps) => {
  await sleep(5000);
  const response = await fetch("https://omdbapi.com/?apikey=416ed51a&i=" + id);
  const data: BigMovie = await response.json();

  console.log(data);

  return (
    <div>
      <h3>{data.Title}</h3>
      <div>
        <Image src={data.Poster} alt="Blaha" width={300} height={300} />
      </div>
      <p>{data.Plot}</p>
      <ul>
        {data.Ratings.map((rating) => (
          <li key={rating.Source}>
            <span>{rating.Source}</span>: <span>{rating.Value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
