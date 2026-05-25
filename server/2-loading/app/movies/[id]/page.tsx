import LoadingDots from "@/app/components/LoadingDots";
import { MovieDetails } from "@/app/components/MovieDetails";
import { Suspense } from "react";

type MovieDetailsParentProps = {
  params: Promise<{ id: string }>;
};

export default async function MovieDetailsParent({
  params,
}: MovieDetailsParentProps) {
  const { id } = await params;

  return (
    <>
      Details: {id}
      <Suspense fallback={<LoadingDots />}>
        <MovieDetails id={id} />
      </Suspense>
    </>
  );
}
