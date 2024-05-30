import { toast } from "react-toastify";

/** Function to show a success toast message */
export const showSuccessToast = ({ message }) => {
  // Display a success toast with the provided message
  toast.success(message);
};

/** Function to show a error toast message */
export const showErrorToast = ({ message }) => {
  // Display a error toast with the provided message
  console.log("showErrorToast....", message);
  toast.error(message);
};
