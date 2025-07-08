import React from "react";

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-2xl border border-gray-200 bg-white shadow-sm ${className}`}
    {...props}
  />
));
Card.displayName = "Card";

export const CardContent: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className = "", ...props }) => (
  <div className={`p-6 ${className}`} {...props} />
);
CardContent.displayName = "CardContent";
