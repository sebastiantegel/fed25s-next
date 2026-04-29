"use client";

import { ReactNode } from "react";

export enum ButtonType {
  save,
  remove,
  default,
  toggle,
}

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  buttonType?: ButtonType;
};

export const Button = ({ children, onClick, buttonType }: ButtonProps) => {
  let className = "p-2 m-2 border border-amber-200 rounded-xl cursor-pointer";

  switch (buttonType) {
    case ButtonType.default:
      className += " bg-fuchsia-700";
      break;

    case ButtonType.remove:
      className += " bg-amber-800";
      break;

    case ButtonType.save:
      className += " bg-emerald-400";
      break;

    case ButtonType.toggle:
      className += " bg-fuchsia-400";
      break;

    default:
      className += " bg-blue-600";
      break;
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
