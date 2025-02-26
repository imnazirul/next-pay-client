/* eslint-disable react/prop-types */
import { cn } from "../lib/utils";

const Input = (
  { className, placeholder, type, defaultValue, value, onChange }
) => {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={cn(
        "bg-transparent outline-none border border-gray-300 rounded-md py-2 px-4 focus:border-blue-500 placeholder:text-gray-400",
        className
      )}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
