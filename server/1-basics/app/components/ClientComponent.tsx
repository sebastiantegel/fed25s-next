"use client";

type ClientComponentProps = {
  buttonText: string;
};

export const ClientComponent = ({ buttonText }: ClientComponentProps) => {
  return (
    <button
      onClick={() => {
        console.log("Clicking from client");
      }}
    >
      {buttonText}
    </button>
  );
};
