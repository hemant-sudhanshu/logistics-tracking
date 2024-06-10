import * as Yup from "yup";
import { strings } from "../constants";

// Destructure error messages from strings module
const {
  validation: {
    email,
    userName,
    password,
    name,
    acceptTerms,
    shipmentId,
    title,
    date,
    deliveryDate,
    origin,
    houseNo,
    address1,
    destinationCity,
    destinationState,
    destinationPincode,
    status,
  },
} = strings;

// Define Yup schema for validation
export const schema = {
  userName: Yup.string().required(userName.required),
  email: Yup.string().required(email.required).email(email.invalid),
  password: Yup.string().required(password.required),
  firstName: Yup.string().required(name.firstName),
  lastName: Yup.string().required(name.lastName),
  confirmPassword: Yup.string()
    .required(password.confirmPassword)
    .oneOf([Yup.ref("password")], password.doNotMatch),
  acceptTerms: Yup.boolean().isTrue(acceptTerms),
};

export const shipmentSchema = {
  shipmentId: Yup.string().required(shipmentId.required),
  title: Yup.string().required(title.required),
  date: Yup.string().required(date.required),
  deliveryDate: Yup.string().required(deliveryDate.required),
  origin: Yup.string().required(origin.required),
  houseNo: Yup.string().required(houseNo.required),
  address1: Yup.string().required(address1.required),
  destinationCity: Yup.string().required(destinationCity.required),
  destinationState: Yup.string().required(destinationState.required),
  destinationPincode: Yup.string().required(destinationPincode.required),
  status: Yup.string().required(status.required),
};
