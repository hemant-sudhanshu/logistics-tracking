import React from "react";

/**
 * Input component renders an input element with optional label, and error message.
 * @param props - Props for the Input component.
 */
export const Input = (props) => {
  const { type = "text", id, label, error, ...rest } = props;
  return (
    <div className="mb-4 w-full bg-white rounded px-2">
      <div className="relative z-0">
        <input
          type={type}
          id={id}
          className={`block w-full appearance-none border-0 border-b-2 border-border bg-transparent px-0 pb-1 pt-4 text-sm text-placeholder selected:bg-transparent focus:border-secondary focus:outline-none focus:ring-0 ${
            !!error ? "border-error focus:border-error" : ""
          } peer`}
          placeholder=" "
          {...rest}
        />
        <label
          htmlFor={id}
          className={`absolute top-4 z-10 origin-[0] -translate-y-5 scale-75 transform text-sm text-placeholder duration-300 after:text-error peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-autofill:-translate-y-5 peer-autofill:scale-75 peer-required:after:ml-0.5 peer-required:after:content-['*'] peer-focus:start-0 peer-focus:-translate-y-5 peer-focus:scale-75 rtl:peer-autofill:left-auto rtl:peer-autofill:translate-x-1/4 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 ${
            !!error ? "text-error" : ""
          }
          `}
        >
          {label}
        </label>
        {!!error && (
          <p
            className="animate-fadeInDown text-xs text-error
            transition-all 
            duration-500"
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};
