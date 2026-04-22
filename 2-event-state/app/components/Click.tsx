"use client";

export const Click = () => {
  const handleClick = () => {
    console.log("Klickat på knappen");
  };

  return (
    <>
      <button onClick={handleClick}>Klicka här</button>
    </>
  );
};
