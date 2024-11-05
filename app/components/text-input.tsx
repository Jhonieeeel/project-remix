import { forwardRef, InputHTMLAttributes, Ref } from "react";
import { twMerge } from "tailwind-merge";

export default forwardRef(function TextInput(
  {
    type = "text",
    className = "",
    ...props
  }: InputHTMLAttributes<HTMLInputElement>,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <input
      {...props}
      type={type}
      ref={ref}
      className={twMerge(
        "rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-jacarta-500 focus:ring-jacarta-500",
        className,
      )}
    />
  );
});
