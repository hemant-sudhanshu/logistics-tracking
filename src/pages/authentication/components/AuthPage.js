import { Outlet } from "react-router-dom";

/**
 * AuthPage Component
 *
 * A wrapper component for the authentication screen, providing a consistent layout.
 *
 * @param className Additional CSS classes to be applied to the right component.
 */
export const AuthPage = ({ className }) => {
  return (
    <div className="h-screen bg-background dark:bg-background-dark">
      <div className="relative flex h-screen w-screen flex-col md:h-screen md:flex-row">
        <div className={`flex w-full justify-center md:my-auto ${className}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
