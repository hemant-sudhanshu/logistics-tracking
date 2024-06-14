import { useMutation } from "@tanstack/react-query";
import useApi, { endPoints } from "../../../api";

/**
 * useSignInMutation hook
 *
 * A custom React hook for handling user sign-in mutation.
 * This hook utilizes React Query for managing asynchronous data fetching
 * and updating the UI based on the response.
 */
const useSignInMutation = () => {
  /**
   * useApi: A custom hook for accessing the API instance
   */
  const api = useApi();

  /**
   * signIn: Function for initiating the sign-in process
   * @param signInReq The request object containing user credentials for sign-in
   */
  const signIn = async (signInReq) => {
    try {
      const response = await api.post(endPoints.auth.logIn, signInReq);
      return response;
    } catch (error) {
      // Rethrow the error to be caught by the caller
      throw error;
    }
  };

  return useMutation({
    mutationKey: ["userQueryKey"],
    mutationFn: signIn,
  });
};

export { useSignInMutation };
