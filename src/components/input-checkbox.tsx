import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import CheckIcon from "../assets/icons/check.svg?react";
import Icon from "./icon";
import Skeleton from "./skeleton";

export const inputCheckboxWrapperVariants = cva(
  "group relative inline-flex cursor-pointer items-center justify-center",
);

export const inputCheckboxVariants = cva(
  "peer flex cursor-pointer appearance-none items-center justify-center overflow-hidden transition",
  {
    variants: {
      variant: {
        none: "",
        default:
          "border-green-base hover:border-green-dark hover:bg-green-dark/20 checked:border-green-base checked:bg-green-base group-hover:checked:border-green-dark group-hover:checked:bg-green-dark border-2 border-solid",
      },
      size: {
        md: "h-5 w-5 rounded-sm",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "default",
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

type InputCheckboxProps = {
  loading?: boolean;
} & VariantProps<typeof inputCheckboxVariants> &
  Omit<React.ComponentProps<"input">, "size" | "disabled">;

export default function InputCheckbox({
  variant,
  size,
  disabled,
  className,
  loading,
  ...props
}: InputCheckboxProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={inputCheckboxVariants({ variant: "none", size })}
      />
    );
  }

  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={inputCheckboxVariants({ variant, size, disabled })}
        {...props}
      />
      <Icon svg={CheckIcon} className={inputCheckboxIconVariants({ size })} />
    </label>
  );
}
