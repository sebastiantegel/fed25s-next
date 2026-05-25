function SkeletonCard() {
  return (
    <div className="border border-gray-200 flex flex-col justify-between items-center max-w-50 w-50 p-5 gap-3">
      {/* Title */}
      <div className="h-4 w-36 rounded bg-gray-200 animate-pulse" />
      {/* Poster */}
      <div className="h-[200px] w-[200px] rounded bg-gray-200 animate-pulse" />
      {/* Link */}
      <div className="h-4 w-24 rounded bg-gray-200 animate-pulse" />
    </div>
  );
}

export default function MoviesSkeleton({ count = 10 }: { count?: number }) {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
