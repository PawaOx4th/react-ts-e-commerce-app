import clsx from "clsx";
import React from "react";
import HashLoader from "react-spinners/HashLoader";

type GlobalLoadingPropsType = {
  isOpen: boolean;
};

export function GlobalLoading({ isOpen = false }: GlobalLoadingPropsType) {
  if (!isOpen) return null;

  return (
    <div
      className={clsx(
        "absolute z-[100]",
        "w-full h-full",
        "bg-black/60",
        "flex justify-center items-center",
      )}
    >
      <HashLoader color='#41CBBF' size='72px' />
    </div>
  );
}
