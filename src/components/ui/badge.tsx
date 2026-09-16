import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium tracking-wide",
  {
    variants: {
      tone: {
        default: "bg-bg-sunken text-muted",
        accent: "bg-accent-soft text-accent",
        danger: "bg-danger-soft text-danger",
        warn: "bg-warn-soft text-warn",
        ok: "bg-ok-soft text-ok",
        info: "bg-info-soft text-info",
      },
    },
    defaultVariants: { tone: "default" },
  },
);

export function Badge({
  className,
  tone,
  ...props
}: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
