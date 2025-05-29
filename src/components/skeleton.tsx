import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const skeletonVariants = cva(
  "pointer-events-none animate-pulse bg-gray-200",
  {
    variants: {
      rounded: {
        sm: "rounded-sm",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      rounded: "lg",
    },
  },
);

type SkeletonProps = VariantProps<typeof skeletonVariants> &
  React.ComponentProps<"div">;

export default function Skeleton({
  rounded,
  className,
  ...props
}: SkeletonProps) {
  return (
    <div className={skeletonVariants({ rounded, className })} {...props} />
  );
}
