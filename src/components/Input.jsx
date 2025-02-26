/* eslint-disable react/prop-types */
import { cn } from "../lib/utils";
import "./input.css";
import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      className,
      placeholder,
      type,
      defaultValue,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={cn(
          "bg-transparent outline-none placeholder:text-[#EAECF0]",
          className
        )}
        {...props}
        value={value}
        onChange={onChange}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
