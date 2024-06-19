/**
 * API endpoints for the app.
 */
export const endPoints = {
  /** Endpoints for authentication. */
  auth: {
    /** Endpoint for user login. */
    logIn: "/user/login",
    /** Endpoint for user sign-up. */
    signUp: "/user/signup",
    /** Endpoint for get user details. */
    getUser: "/user/profile",
  },
  /** Endpoints for app. */
  primary: {
    /** Get all shipments */
    shipments: "/shipments",
    addAction: "/shipments/addAction",
  },
};
