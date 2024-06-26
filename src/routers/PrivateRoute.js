import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { routes } from "../constants";
import { NavBar } from "../pages";

// export interface PrivateRouteContext {
//   setSticky: React.Dispatch<React.SetStateAction<boolean>>;
// }

/**
 * PrivateRoute component restricts access to routes based on the authentication status.
 * If the user is not authenticated, it redirects them to the sign-in page.
 * If the user is authenticated, it renders the nested routes using the Outlet component.
 * @param isAuthenticated - Indicates whether the user is authenticated or not.
 */
export const PrivateRoute = ({ isAuthenticated }) => {
  // set navbar as sticky top
  const [sticky, setSticky] = useState(true);

  // If not authenticated, redirect to the sign-in page
  if (!isAuthenticated) return <Navigate to={routes.signIn} />;

  // If authenticated, render the nested routes
  return (
    <div className="h-screen w-screen">
      <NavBar sticky={sticky} />
      <Outlet context={{ setSticky }} />
    </div>
  );
};
