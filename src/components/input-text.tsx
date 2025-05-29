import { cva, cx, type VariantProps } from "class-variance-authority";
import React from "react";
import { textVariants } from "./text";

export const inputTextVariants = cva(
  "focus:border-pink-base border-b border-solid border-gray-200 bg-transparent outline-none",
  {
    variants: {
      size: {
        md: "px-2 pb-2",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  },
);

type InputTextProps = VariantProps<typeof inputTextVariants> &
  Omit<React.ComponentProps<"input">, "size" | "disabled">;

export default function InputText({
  size,
  disabled,
  className,
  ...props
}: InputTextProps) {
  return (
    <input
      className={cx(
        inputTextVariants({ size, disabled }),
        textVariants(),
        className,
      )}
      {...props}
    />
  );
}
