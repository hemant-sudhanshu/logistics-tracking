import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "dotenv/config";
import { routes, strings } from "../constants";
import { useAuthContext } from "../hooks";
import { queryClient } from "../App";
import { showErrorToast } from "../utils";
import { getGeneralApiProblem } from "../api";

/**
 * Configuring the axios instance.
 */
const url = process.env.REACT_APP_BASE_URL;

//   url: "http://localhost:8000/api",

const DEFAULT_API_CONFIG = {
  url: url,
  timeout: 10000,
};

/**
 * API hook to manage network calls and errors
 */
export const useApi = () => {
  const { token, logout } = useAuthContext();
  const navigate = useNavigate();

  /**
   * Initialise axios api instance
   */
  const api = axios.create({
    baseURL: DEFAULT_API_CONFIG.url,
    timeout: DEFAULT_API_CONFIG.timeout,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  /**
   * Handle logout action.
   * It logs out the user and redirects to the sign-in page.
   */
  const onLogout = () => {
    // Show error message
    showErrorToast({ message: strings.apiErrors.unauthorizedAccess });
    // Remove user data from AuthContext
    logout();
    // Invalidate all the queries data
    queryClient.invalidateQueries();
    // Navigate to sign-in page
    navigate(routes.signIn, { replace: true });
  };

  // Request Interceptor
  api.interceptors.request.use(
    (config) => {
      // You can modify the request config here (e.g., add headers, authentication token)
      if (!!token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  api.interceptors.response.use(
    (response) => {
      // You can modify the response data here before it's passed to the component
      return response?.data;
    },
    async (error) => {
      // Handle error responses here
      const problem = getGeneralApiProblem(error, onLogout);
      return Promise.reject(problem);
    }
  );

  return api;
};
