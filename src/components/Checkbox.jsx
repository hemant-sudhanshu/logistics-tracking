import React from "react";

/**
 * Checkbox component.
 * @param id - The ID for the checkbox input.
 * @param error - Optional error message to display.
 * @param className - Additional CSS class names for styling.
 * @param rest - Additional props to pass to the checkbox input element.
 */
export const Checkbox = React.memo(({ id, error, children, className, ...rest }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex items-center">
        <input
          id={id}
          type="checkbox"
          className="size-4 rounded border-border bg-card accent-primary"
          {...rest}
        />
        {children}
      </div>
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
  );
});
