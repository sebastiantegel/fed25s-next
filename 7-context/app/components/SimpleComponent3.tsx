"use client";

import { useContext } from "react";
import { SimpleContext } from "../contexts/SimpleContext";

export const SimpleComponent3 = () => {
  const value = useContext(SimpleContext);

  return <div>SimpleComponent 3: {value}</div>;
};
