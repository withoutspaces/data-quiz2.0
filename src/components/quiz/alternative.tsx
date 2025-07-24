import React from "react";
import clsx from "clsx";

interface AlternativeProps {
  handleClickedOption: (a: string) => void;
  alternative: string;
  selected: boolean;
  children: React.ReactNode;
  isRight: boolean;
  isWrong: boolean;
  disabled: boolean;
}

export function Alternative({
  handleClickedOption,
  alternative,
  selected,
  children,
  isRight,
  isWrong,
  disabled,
}: AlternativeProps) {
  const baseClasses = "ease-in-out transition-all p-4 rounded-md text-white";
  const defaultStateClasses =
    "bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 hover:scale-105 md:hover:scale-110";

  const dynamicClasses = clsx(
    baseClasses,
    {
      "bg-green-700 scale-105 ring-2 ring-green-400 md:hover:scale-110":
        isRight,
      "bg-red-900 ring-2 ring-red-500": isWrong,
      "bg-indigo-600 scale-105 ring-2 ring-indigo-400 md:hover:scale-110":
        selected && !isRight,
    },
    !isRight && !isWrong && !selected && defaultStateClasses
  );

  return (
    <button
      type="button"
      onClick={() => handleClickedOption(alternative)}
      disabled={disabled}
      className={dynamicClasses}
    >
      {children}
    </button>
  );
}
