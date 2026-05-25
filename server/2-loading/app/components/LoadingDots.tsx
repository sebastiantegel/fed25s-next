export default function LoadingDots() {
  return (
    <div className="flex items-center justify-center gap-2 py-20">
      <span className="h-3 w-3 rounded-full animate-bounce-high animate-dot-color [animation-delay:-0.32s]" />
      <span className="h-3 w-3 rounded-full animate-bounce-high animate-dot-color [animation-delay:-0.16s]" />
      <span className="h-3 w-3 rounded-full animate-bounce-high animate-dot-color" />
    </div>
  );
}
