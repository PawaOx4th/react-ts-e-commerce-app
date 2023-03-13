import clsx from "clsx";
import React, { ComponentPropsWithoutRef } from "react";

function Label({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"label">) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label {...props} className={clsx(className)}>
      {children}
    </label>
  );
}

export default Label;
