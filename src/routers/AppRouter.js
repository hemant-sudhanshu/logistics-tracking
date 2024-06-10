import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  ErrorPage,
  Home,
  About,
  PrivacyPolicy,
  SignIn,
  SignUp,
  TermsOfUse,
  ShipmentDetails,
  AddNewShipment,
} from "../pages";

import { routes } from "../constants";
import { useAuthContext } from "../hooks";
import { PrivateRoute, PublicRoutes, PolicyRoutes } from "../routers";

/**
 * AppRouter component manages the routing configuration of the application.
 * It sets up routes for different pages and handles authentication-related routing.
 * It also provides error handling for undefined routes.
 */
export const AppRouter = () => {
  // Fetching user authentication status from context
  const { token, isAppReady } = useAuthContext();
  const isAuthenticated = !!token;

  // Creating a browser router instance
  const router = createBrowserRouter(
    // Generating routes from JSX elements
    createRoutesFromElements(
      <Route path={routes.root} errorElement={<ErrorPage />}>
        {/* Private Route for authenticated users */}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route index element={<Home />} />
          <Route path={routes.addNewShipment} element={<AddNewShipment />} />
          <Route path={routes.about} element={<About />} />
          <Route
            path={`${routes.shipments}/:shipmentId`}
            element={<ShipmentDetails />}
          />
        </Route>
        {/* Auth page route */}
        <Route element={<PublicRoutes isAuthenticated={isAuthenticated} />}>
          <Route path={routes.signIn} element={<SignIn />} />
          <Route path={routes.signUp} element={<SignUp />} />
        </Route>
        <Route element={<PolicyRoutes isAuthenticated={isAuthenticated} />}>
          <Route path={routes.termsCondition} element={<TermsOfUse />} />
          <Route path={routes.privacyPolicy} element={<PrivacyPolicy />} />
        </Route>
      </Route>
    )
  );

  if (!isAppReady) return null;

  // Rendering the RouterProvider with the created router
  return <RouterProvider router={router} />;
};
