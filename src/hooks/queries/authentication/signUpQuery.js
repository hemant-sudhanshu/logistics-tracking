import { useMutation } from "@tanstack/react-query";
import useApi, { endPoints } from "../../../api";

/**
 * Custom hook for user sign-up mutation.
 *
 * This hook handles the process of signing up a user by making a request to the API endpoint.
 * It utilizes React Query for managing asynchronous data fetching and updating the UI based on the response.
 */
const useSignUpMutation = () => {
  /**
   * useApi: A custom hook for accessing the API instance
   */
  const api = useApi();

  /**
   * signIn: Function for initiating the sign-up process
   * @param signUpReq The request object containing user information for sign-up
   */
  const signIn = async (signUpReq) => {
    try {
      const response = await api.post(endPoints.auth.signUp, signUpReq);
      return response;
    } catch (error) {
      // Rethrow the error to be caught by the caller
      throw error;
    }
  };

  return useMutation({
    mutationFn: signIn,
  });
};

export { useSignUpMutation };
