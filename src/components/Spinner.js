/**
 * Spinner Component
 * Displays a loading spinner.
 */
import logo from "../logo.svg";

export const Spinner = (props) => {
  const { className, ...rest } = props;
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center ${className}`}
      {...rest}
    >
      <img
        src={logo}
        className={`size-12 animate-spin rounded-full object-contain`}
        alt="LOGO"
      />
    </div>
  );
};
