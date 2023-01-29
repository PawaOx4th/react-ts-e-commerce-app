import clsx from "clsx"
import { ComponentPropsWithoutRef } from "react"

function Label({ children, ...props }: Omit<ComponentPropsWithoutRef<"label">, "className">) {
  return (
    <label {...props} className={clsx("text-xl")}>
      {children}
    </label>
  )
}

export default Label
