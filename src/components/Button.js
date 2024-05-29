/**
 * Button component renders a button element with specified title.
 * @param props - Props for the Button component.
 */
export const Button = ({ title, className, ...rest }) => {
  return (
    <button
      type="button"
      className={`font-regular rounded bg-button px-4 py-2 text-background transition-transform hover:scale-105 hover:bg-button-hover ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
};
