import { OmdbResponse } from "@sebastiantegel/edutypes";
import { searchMovies } from "../lib/movies";
import { SearchForm } from "./SearchForm";
import { SearchResult } from "./SearchResult";
import { Pagination } from "./Pagination";

type MoviesPageProps = {
  searchParams: Promise<{ q: string; page?: string }>;
};

export default async function MoviesPage({ searchParams }: MoviesPageProps) {
  // q är värdet från textrutan i SearchForm
  const { q, page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;

  const result = q
    ? await searchMovies(q, page)
    : ({
        Search: [],
        totalResults: "0",
        Response: "True",
      } satisfies OmdbResponse);

  return (
    <>
      <SearchForm />
      {q && (
        <>
          <SearchResult movies={result.Search} />
          <Pagination numberOfMovies={result.totalResults} q={q} page={page} />
        </>
      )}
    </>
  );
}
