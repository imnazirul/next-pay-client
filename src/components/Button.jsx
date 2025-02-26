/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Button = forwardRef(
  ({ className, isLoading, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn("rounded-lg px-6 py-3 ", className)}
        {...props}
        disabled={isLoading}
      >
        {isLoading &&   <p className="border-white h-5 w-5 inline-block animate-spin rounded-full border-[3px] mr-1 border-t-[#6A6EF6]" />}
        {props.children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
