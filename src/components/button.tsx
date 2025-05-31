import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

import SpinnerIcon from "../assets/icons/spinner.svg?react";
import Icon from "./icon";
import Text from "./text";

export const buttonVariants = cva(
  "group flex cursor-pointer items-center justify-center gap-2 rounded-lg transition",
  {
    variants: {
      variant: {
        primary: "hover:bg-pink-light bg-gray-200",
      },
      size: {
        md: "h-14 px-5 py-4",
      },
      disabled: {
        true: "pointer-events-none opacity-50",
      },
      handling: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
      handling: false,
    },
  },
);

export const buttonIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-pink-base",
    },
    size: {
      md: "h-5 w-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const buttonTextVariant = cva("", {
  variants: {
    variant: {
      primary: "text-gray-400",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = {
  icon?: React.ComponentProps<typeof Icon>["svg"];
  handling?: boolean;
} & Omit<React.ComponentProps<"button">, "size" | "disabled"> &
  VariantProps<typeof buttonVariants>;

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  handling,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({
        variant,
        size,
        disabled,
        className,
        handling,
      })}
      {...props}
    >
      {icon && (
        <Icon
          svg={handling ? SpinnerIcon : icon}
          animate={handling}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text variant="body-md-bold" className={buttonTextVariant({ variant })}>
        {children}
      </Text>
    </button>
  );
}
