"use client";

export const Submit = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        console.log("Submit done");
      }}
    >
      <button>Spara</button>
    </form>
  );
};
