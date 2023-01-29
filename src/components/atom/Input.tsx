import React, { ComponentProps, ComponentPropsWithRef } from "react"
import clsx from "clsx"

type InputPropsType = {} & ComponentPropsWithRef<"input">

function Input({ children, className, ...props }: InputPropsType) {
  return (
    <input
      {...props}
      className={
        Boolean(className)
          ? className
          : clsx("py-2 px-3 rounded outline-none ", "border-2 border-solid focus:border-black")
      }
    >
      {children}
    </input>
  )
}

export default Input
