import clsx from "clsx";
import React, { ComponentPropsWithRef } from "react";

type InputPropsType = {} & ComponentPropsWithRef<"input">;

function Input({ children, className, ...props }: InputPropsType) {
  return (
    // eslint-disable-next-line react/void-dom-elements-no-children
    <input
      {...props}
      className={
        className ||
        clsx(
          "py-2 px-3 rounded outline-none ",
          "border-2 border-solid focus:border-black",
        )
      }
    >
      {children}
    </input>
  );
}

export default Input;
