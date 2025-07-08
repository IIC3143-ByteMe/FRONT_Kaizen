import React from "react";
import "../../styles/Button.css"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", ...props }, ref) => {
    const variantClass =
      variant === "secondary" ? "button--secondary" : "button--primary";

    return (
      <button
        ref={ref}
        className={`button ${variantClass} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export default Button;
