import { cn } from "@/src/libs/utils/general";
import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  onIconClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, icon, onIconClick, ...props }, ref) => {
    const id = React.useId();
    return (
      <div className="relative">
        <input
          type={type}
          id={id}
          className={cn(
            "flex h-12 w-full rounded-full border-none bg-background-200 px-[32px] pt-6 pb-1.5 font-normal text-gray outline-none focus:outline-none focus:bg-background-300 placeholder:text-gray text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            className,
          )}
          ref={ref}
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className="text-xs font-bold text-gray absolute left-[32px] top-1.5"
          >
            {label}
          </label>
        )}
        {icon && (
          <div
            onClick={onIconClick}
            className="absolute cursor-pointer right-1 w-10 h-10 rounded-full flex items-center justify-center top-1/2 -translate-y-1/2 bg-danger"
          >
            {icon}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
