import { forwardRef, Ref, SelectHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default forwardRef(function TextInput(
  {
    className = "",
    children,
    ...props
  }: SelectHTMLAttributes<HTMLSelectElement>,
  ref: Ref<HTMLSelectElement>,
) {
  return (
    <select
      {...props}
      ref={ref}
      className={twMerge(
        "rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-jacarta-500 focus:ring-jacarta-500",
        className,
      )}
    >
      {children}
    </select>
  );
});
