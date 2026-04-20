"use client";

export const Interpolation = () => {
  const name = "Sebastian";
  const imageUrl =
    "https://img.freepik.com/premium-photo/runner-fitness-man-nature-running-outdoor-workout-healthy-energy-wellness-goal-with-sky-mock-up-background-sports-person-with-exercise-training-motivation-jogging-near-mountains_590464-90796.jpg";

  const handleClick = () => {
    console.log("Klick har inträffat");
  };

  return (
    <>
      <h3>{name}</h3>
      <img src={imageUrl} alt="Running is fun :)" />
      <button onClick={handleClick}>Test</button>
    </>
  );
};
