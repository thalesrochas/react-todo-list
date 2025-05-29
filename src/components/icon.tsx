import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const iconVariants = cva("", {
  variants: {
    animate: {
      true: "animate-spin",
      false: "",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

type IconProps = {
  svg: React.FC<React.ComponentProps<"svg">>;
} & React.ComponentProps<"svg"> &
  VariantProps<typeof iconVariants>;

export default function Icon({
  animate,
  className,
  svg: SvgComponent,
  ...props
}: IconProps) {
  return (
    <SvgComponent className={iconVariants({ animate, className })} {...props} />
  );
}
