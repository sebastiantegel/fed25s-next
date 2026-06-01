import { SearchMovie } from "../components/SearchMovie";
import { MovieResult } from "../components/MovieResult";
import { Suspense } from "react";

type MoviePageProps = {
  searchParams: Promise<{ q: string }>;
};

export default async function MoviePage({ searchParams }: MoviePageProps) {
  // q är en querystring när vi surfar till route (/movies).
  const { q } = await searchParams;

  // Visa våra komponenter...
  // Använd Suspense för att visa en laddning under tiden som MovieResult hämtar
  // sin data.
  // Skicka q till MovieResult för att veta vilka filmer som skall hämtas.
  return (
    <>
      <SearchMovie />
      <Suspense fallback={<>Laddar...</>}>
        <MovieResult query={q} />
      </Suspense>
    </>
  );
}
