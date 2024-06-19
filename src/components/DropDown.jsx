import React from "react";

export const DropDown = React.memo((props) => {
  const {
    required = false,
    id,
    label,
    selectLabel,
    options,
    selectedValue,
    error = "",
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
      <select
        id={id}
        name={id}
        className={`w-full p-2 h-10 border rounded text-black ${
          !!error ? "border-error focus:border-error" : ""
        }`}
        {...rest}
      >
        <option value="" disabled>
          {selectLabel}
        </option>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      <p className="text-xs text-error">{error}</p>
    </div>
  );
});
