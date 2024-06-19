import * as Yup from "yup";
import { strings } from "../constants";

// Destructure error messages from strings module
const {
  validation: {
    characters,
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
    action,
    location,
  },
} = strings;

// Define Yup schema for validation
export const schema = {
  userName: Yup.string().required(userName.required),
  email: Yup.string().required(email.required).email(email.invalid),
  password: Yup.string()
    .min(8, password.length)
    .matches(/[a-z]/, password.lowercase)
    .matches(/[A-Z]/, password.uppercase)
    .matches(/[0-9]/, password.number)
    .matches(/[@$!%*?&#]/, password.special)
    .required(password.required),
  firstName: Yup.string()
    .min(3, characters.min3)
    .max(15, characters.max15)
    .required(name.firstName),
  lastName: Yup.string()
    .min(3, characters.min3)
    .max(15, characters.max15)
    .required(name.lastName),
  confirmPassword: Yup.string()
    .required(password.confirmPassword)
    .oneOf([Yup.ref("password")], password.doNotMatch),
  acceptTerms: Yup.boolean().isTrue(acceptTerms),
};

export const shipmentSchema = {
  shipmentId: Yup.string()
    .min(3, characters.min3)
    .required(shipmentId.required),
  title: Yup.string().min(3, characters.min3).required(title.required),
  date: Yup.string().required(date.required),
  deliveryDate: Yup.string().required(deliveryDate.required),
  origin: Yup.string().required(origin.required),
  houseNo: Yup.string().required(houseNo.required),
  address1: Yup.string().min(3, characters.min3).required(address1.required),
  destinationCity: Yup.string().required(destinationCity.required),
  destinationState: Yup.string().required(destinationState.required),
  destinationPincode: Yup.string().required(destinationPincode.required),
  status: Yup.string().required(status.required),
  action: Yup.string().required(action.required),
  location: Yup.string().required(location.required),
};
