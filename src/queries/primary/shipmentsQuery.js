import { useMutation, useQuery } from "@tanstack/react-query";
import useApi, { endPoints } from "../../api";

/**
 * Custom hook for querying the shipments.
 */
const useShipmentQuery = () => {
  const api = useApi();

  // Function to fetch shipments
  const getShipmentsList = async () => {
    try {
      const res = await api.get(`${endPoints.primary.shipments}`);
      return res.data;
    } catch (error) {
      // Handle errors gracefully
      throw error;
    }
  };

  // Execute the query
  return useQuery({
    queryKey: ["ShipmentsQueryKey"],
    queryFn: getShipmentsList,
  });
};

/**
 * Custom hook for querying the shipment details.
 */
const useShipmentDetailsQuery = ({ id }) => {
  const api = useApi();
  console.log(`id is: ${id}`);

  // Function to fetch shipments
  const getShipmentsList = async () => {
    try {
      const res = await api.get(`${endPoints.primary.shipments}/${id}`);
      return res.data;
    } catch (error) {
      // Handle errors gracefully
      throw error;
    }
  };

  // Execute the query
  return useQuery({
    queryKey: ["ShipmentsQueryKey"],
    queryFn: getShipmentsList,
  });
};

/**
 * Custom hook for shipments mutation.
 *
 * This hook handles the process of adding a new shipment by making a request to the API endpoint.
 * It utilizes React Query for managing asynchronous data fetching and updating the UI based on the response.
 */
const useShipmentsMutation = () => {
  /**
   * useApi: A custom hook for accessing the API instance
   */
  const api = useApi();

  /**
   * addShipment: Function for initiating the add shipment request
   * @param shipmentReq The request object containing user information for a shipment
   */
  const addShipment = async (shipmentReq) => {
    try {
      const response = await api.post(endPoints.primary.shipments, shipmentReq);
      return response;
    } catch (error) {
      // Rethrow the error to be caught by the caller
      throw error;
    }
  };

  return useMutation({
    mutationFn: addShipment,
  });
};

/**
 * Custom hook for shipment mutation.
 *
 * This hook handles the process of adding a new shipment by making a request to the API endpoint.
 * It utilizes React Query for managing asynchronous data fetching and updating the UI based on the response.
 */
const useShipmentMutation = ({ id }) => {
  /**
   * useApi: A custom hook for accessing the API instance
   */
  const api = useApi();

  /**
   * updateShipment: Function for initiating the sign-up process
   * @param shipmentReq The request object containing user information for a shipment
   */
  const updateShipment = async (shipmentReq) => {
    try {
      console.log("Shipment request", shipmentReq);
      const response = await api.patch(
        `${endPoints.primary.shipments}/${id}`,
        shipmentReq
      );
      return response;
    } catch (error) {
      // Rethrow the error to be caught by the caller
      throw error;
    }
  };

  return useMutation({
    mutationFn: updateShipment,
  });
};

export {
  useShipmentQuery,
  useShipmentDetailsQuery,
  useShipmentsMutation,
  useShipmentMutation,
};
