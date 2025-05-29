import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import CheckIcon from "../assets/icons/check.svg?react";
import Icon from "./icon";

export const inputCheckboxWrapperVariants = cva(
  "group relative inline-flex cursor-pointer items-center justify-center",
);

export const inputCheckboxVariants = cva(
  "peer border-green-base hover:border-green-dark hover:bg-green-dark/20 checked:border-green-base checked:bg-green-base group-hover:checked:border-green-dark group-hover:checked:bg-green-dark flex cursor-pointer appearance-none items-center justify-center overflow-hidden border-2 border-solid transition",
  {
    variants: {
      size: {
        md: "h-5 w-5 rounded-sm",
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

export const inputCheckboxIconVariants = cva(
  "absolute top-1/2 hidden -translate-y-1/2 fill-white peer-checked:block",
  {
    variants: {
      size: {
        md: "h-3 w-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type InputCheckboxProps = VariantProps<typeof inputCheckboxVariants> &
  Omit<React.ComponentProps<"input">, "size" | "disabled">;

export default function InputCheckbox({
  size,
  disabled,
  className,
  ...props
}: InputCheckboxProps) {
  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={inputCheckboxVariants({ size, disabled })}
        {...props}
      />
      <Icon svg={CheckIcon} className={inputCheckboxIconVariants({ size })} />
    </label>
  );
}
