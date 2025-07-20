import React from "react";
import clsx from "clsx";

interface AlternativeProps {
  handleClickedOption: () => void;
  selected: boolean;
  children: React.ReactNode;
  isRight: boolean;
  isWrong: boolean;
  disabled: boolean;
}

export function Alternative({
  handleClickedOption,
  selected,
  children,
  isRight,
  isWrong,
  disabled,
}: AlternativeProps) {
  const baseClasses = "ease-in-out transition-all p-4 rounded-md text-white";
  const defaultStateClasses =
    "bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 hover:scale-110";

  const dynamicClasses = clsx(
    baseClasses,
    {
      "bg-green-600 scale-110 ring-2 ring-green-400": isRight,
      "bg-red-600 ring-2 ring-red-400": isWrong,
      "bg-indigo-600 scale-110 ring-2 ring-indigo-400": selected && !isRight,
    },
    !isRight && !isWrong && !selected && defaultStateClasses
  );

  return (
    <button
      type="button"
      onClick={() => handleClickedOption()}
      disabled={disabled}
      className={dynamicClasses}
    >
      {children}
    </button>
  );
}
