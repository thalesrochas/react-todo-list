import { cva, cx, type VariantProps } from "class-variance-authority";
import Skeleton from "./skeleton";
import Text from "./text";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        none: "",
        primary: "bg-green-light",
        secondary: "bg-pink-light",
      },
      size: {
        sm: "px-2 py-0.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
);

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      none: "",
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const badgeSkeletonVariants = cva("", {
  variants: {
    size: {
      sm: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

type BagdeProps = {
  loading?: boolean;
} & React.ComponentProps<"div"> &
  VariantProps<typeof badgeVariants>;

export default function Badge({
  children,
  className,
  variant,
  size,
  loading,
  ...props
}: BagdeProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="full"
        className={cx(
          badgeVariants({ variant: "none" }),
          badgeSkeletonVariants({ size }),
          className,
        )}
      />
    );
  }

  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text
        variant="body-sm-bold"
        className={badgeTextVariants({ variant, className })}
      >
        {children}
      </Text>
    </div>
  );
}
