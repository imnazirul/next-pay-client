/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import { cn } from "../lib/utils";

const Button = forwardRef(
  ({ className, isLoading, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn("rounded-lg font-medium px-4 flex items-center gap-2 justify-center cursor-pointer flex-1 w-full text-white bg-blue-500 py-2.5 disabled:cursor-not-allowed ", className)}
        {...props}
        disabled={isLoading}
      >
        {isLoading &&   <p className="border-white h-5 w-5 inline-block animate-spin rounded-full border-[3px] mr-1 border-t-blue-400" />}
        {props.children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
