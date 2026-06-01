export const SearchMovie = () => {
  return (
    <form method="GET" action={"/movies"}>
      <input type="text" name="q" />
      <button>Sök</button>
    </form>
  );
};
