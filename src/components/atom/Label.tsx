import clsx from "clsx"
import { ComponentPropsWithoutRef } from "react"

function Label({ children, className, ...props }: ComponentPropsWithoutRef<"label">) {
  return (
    <label {...props} className={clsx(className)}>
      {children}
    </label>
  )
}

export default Label
