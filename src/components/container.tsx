import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const containerVariants = cva("mx-auto", {
  variants: {
    size: {
      md: "max-w-[31.5rem] px-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type ContainerProps = {
  as?: keyof React.JSX.IntrinsicElements;
} & VariantProps<typeof containerVariants> &
  React.ComponentProps<"div">;

export default function Container({
  as = "div",
  size,
  children,
  className,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: containerVariants({ size, className }),
      ...props,
    },
    children,
  );
}
