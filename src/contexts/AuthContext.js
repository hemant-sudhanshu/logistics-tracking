import { createContext } from "react";
import { useAuthUser } from "../hooks";

/**
 * The authentication context used throughout the application.
 */
export const AuthContext = createContext({
  user: undefined,
  token: undefined,
  isAppReady: false,
  login: () => {},
  addUser: () => {},
  logout: () => {},
});

/**
 * A provider component that wraps the application with the authentication context.
 * It provides access to the user authentication state and functions.
 * @param children The child components to be wrapped by the AuthProvider.
 */
export const AuthProvider = ({ children }) => {
  // Retrieve user authentication state and functions from useAuthUser hook
  const { user, token, isAppReady, login, logout, addUser } = useAuthUser();

  // Provide user authentication context to the wrapped components
  return (
    <AuthContext.Provider
      value={{ user, token, login, addUser, logout, isAppReady }}
    >
      {children}
    </AuthContext.Provider>
  );
};
