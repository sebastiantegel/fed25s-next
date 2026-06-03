import Link from "next/link";

type PaginationProps = {
  numberOfMovies: string;
  q: string;
  page: number;
};

export const Pagination = ({ numberOfMovies, q, page }: PaginationProps) => {
  const numberOfPages = Math.ceil(Number(numberOfMovies) / 10);

  return (
    <>
      {page > 1 && <Link href={`/movies?q=${q}&page=${page - 1}`}>{"<-"}</Link>}
      {page} of {numberOfPages}
      {page < numberOfPages && (
        <Link href={`/movies?q=${q}&page=${page + 1}`}>{"->"}</Link>
      )}
    </>
  );
};
