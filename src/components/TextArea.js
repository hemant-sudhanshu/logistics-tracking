import React from "react";

export const TextArea = (props) => {
  const { type = "text", required = false, id, label, error, ...rest } = props;
  return (
    <div className="flex-1">
      <label className="block mb-1" htmlFor={id}>
        {label}

        {/* Conditionally render asterisk */}
        {required && <sup className=" text-error ml-1">*</sup>}
      </label>
      <textarea
        type={type}
        id={id}
        name={id}
        className={`w-full p-2 border rounded text-black ${
          !!error ? "border-error focus:border-error" : ""
        }`}
        {...rest}
      />
      <p className="text-xs text-error">{error}</p>
    </div>
  );
};
