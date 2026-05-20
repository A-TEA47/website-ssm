import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 cursor-pointer",
          {
            "bg-gradient-purple hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] text-white": variant === "primary",
            "bg-accent text-white hover:bg-purple-600": variant === "secondary",
            "border border-purple-main/50 text-purple-main hover:bg-gradient-purple hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]": variant === "outline",
            "hover:bg-surface-hover text-foreground": variant === "ghost",
            "h-9 px-5 text-sm": size === "sm",
            "h-11 px-8 text-base": size === "md",
            "h-14 px-12 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };


