"use client";

export const ConditionalSpinner = () => {
  const isLoading = true;

  return <>{isLoading && <h3>Loading...</h3>}</>;
};
