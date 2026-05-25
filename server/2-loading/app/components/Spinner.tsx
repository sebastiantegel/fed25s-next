export default function Spinner({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <div className="relative h-16 w-16">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
        {/* Spinning arc */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-indigo-500 border-r-indigo-400" />
      </div>
      {label && (
        <p className="animate-pulse text-sm font-medium tracking-wide text-gray-500">
          {label}
        </p>
      )}
    </div>
  );
}
