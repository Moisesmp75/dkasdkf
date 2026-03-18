"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900 disabled:opacity-50 disabled:pointer-events-none";

const variantClasses: Record<Variant, string> = {
  primary: "bg-zinc-900 text-white hover:bg-zinc-800",
  secondary:
    "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-100",
  ghost: "bg-transparent text-zinc-900 hover:bg-zinc-100",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8 px-3",
  md: "h-10 px-4",
  lg: "h-11 px-6",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

