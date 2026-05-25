"use client";

import { useContext } from "react";
import { SimpleContext } from "../contexts/SimpleContext";

export const SimpleComponent1 = () => {
  const value = useContext(SimpleContext);

  return <div>SimpleComponent 1: {value}</div>;
};
