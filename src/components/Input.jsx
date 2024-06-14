import React from "react";

/**
 * Input component renders an input element with optional label, and error message.
 * @param props - Props for the Input component.
 */
export const Input = React.memo((props) => {
  const {
    type = "text",
    required = false,
    id,
    label,
    error,
    className = "",
    ...rest
  } = props;

  return (
    <div className={`flex-1 pb-2 ${className}`}>
      <label className="block mb-1" htmlFor={id}>
        {label}

        {/* Conditionally render asterisk */}
        {required && <sup className=" text-error ml-1">*</sup>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className={`w-full p-2 h-10 border rounded text-black ${
          !!error ? "border-error focus:border-error" : ""
        }`}
        {...rest}
      />
      <p className="text-xs text-error">{error}</p>
    </div>
  );
}); 
