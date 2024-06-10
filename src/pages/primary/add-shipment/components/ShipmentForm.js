import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  staticData,
  routes,
  shipmentSchema,
  strings,
} from "../../../../constants";
import {
  Button,
  Checkbox,
  DropDown,
  Input,
  Spinner,
  TextArea,
} from "../../../../components";
import { useShipmentsMutation } from "../../../../queries";
import { showSuccessToast } from "../../../../utils";
import { useNavigate } from "react-router-dom";

/**
 * Yup schema for sign-up page validation
 */
const ShipmentSchema = Yup.object().shape({
  shipmentId: shipmentSchema.shipmentId, // Validation schema for shipmentId
  title: shipmentSchema.title, // Validation schema for title
  date: shipmentSchema.date, // Validation schema for date
  deliveryDate: shipmentSchema.deliveryDate, // Validation schema for delivery date
  origin: shipmentSchema.origin, // Validation schema for origin
  houseNo: shipmentSchema.houseNo, // Validation schema for houseNo
  address1: shipmentSchema.address1, // Validation schema for address1
  destination: shipmentSchema.destinationCity, // Validation schema for destinationCity
  destinationState: shipmentSchema.destinationState, // Validation schema for destinationState
  destinationPincode: shipmentSchema.destinationCity, // Validation schema for destinationPincode
  status: shipmentSchema.status, // Validation schema for status
});

export const ShipmentForm = () => {
  // Constants for localization
  const {
    primary: { common },
  } = strings;

  const { cities, statuses } = staticData;

  // Calculate min and max date values for input
  const currentDate = new Date();

  // Navigation hook
  const navigate = useNavigate();

  // API call for add shipment
  const { mutateAsync, isPending } = useShipmentsMutation();

  const formik = useFormik({
    initialValues: {
      shipmentId: "",
      title: "",
      date: "",
      deliveryDate: "",
      origin: "",
      houseNo: "",
      address1: "",
      address2: "",
      destination: "",
      destinationState: "",
      destinationPincode: "",
      status: "",
      notes: "",
      instructions: "",
      isIncoming: false,
    },
    validationSchema: ShipmentSchema,
    onSubmit: async (values) => {
      // Call add shipment api
      try {
        await mutateAsync(values);
        formik.resetForm();
        // If shipment add succeeds, show success message
        showSuccessToast({ message: common.shipmentAddSuccess });
        navigate(routes.root, { replace: false });
      } catch (error) {
        // Handle sign up failure
        console.log(error);
      }
    },
  });

  return (
    <div className="max-w-4xl mx-auto p-8 bg-primary rounded">
      <h1 className="text-2xl font-bold mt-4 mb-4 text-center">
        {common.addShipment}
      </h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <Input
            id="shipmentId"
            label={common.shipmentId}
            value={formik.values.shipmentId}
            onChange={formik.handleChange}
            error={formik.errors.shipmentId}
            required
          />
          <Input
            id="title"
            label={common.title}
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.errors.title}
            required
          />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <Input
            id="date"
            type="date"
            label={common.date}
            value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.errors.date}
            max={currentDate.toISOString().split("T")[0]} // Set max date to current day
            required
          />
          <Input
            id="deliveryDate"
            type="date"
            label={common.deliveryDate}
            value={formik.values.deliveryDate}
            onChange={formik.handleChange}
            error={formik.errors.deliveryDate}
            min={currentDate.toISOString().split("T")[0]} // Set min date to current day
            required
          />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <DropDown
            id="origin"
            label={common.origin}
            selectLabel={common.selectCity}
            options={cities}
            onChange={formik.handleChange}
            value={formik.values.origin}
            error={formik.errors.origin}
            required
          />

          <Input
            id="houseNo"
            label={common.houseNo}
            value={formik.values.houseNo}
            onChange={formik.handleChange}
            error={formik.errors.houseNo}
            required
          />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <Input
            id="address1"
            label={common.address1}
            value={formik.values.address1}
            onChange={formik.handleChange}
            error={formik.errors.address1}
            required
          />

          <Input
            id="address2"
            label={common.address2}
            value={formik.values.address2}
            onChange={formik.handleChange}
            error={formik.errors.address2}
          />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <DropDown
            id="destination"
            label={common.destinationCity}
            selectLabel={common.selectCity}
            options={cities}
            onChange={formik.handleChange}
            value={formik.values.destination}
            error={formik.errors.destination}
            required
          />

          <Input
            id="destinationState"
            label={common.state}
            value={formik.values.destinationState}
            onChange={formik.handleChange}
            error={formik.errors.destinationState}
          />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <Input
            id="destinationPincode"
            label={common.pinCode}
            value={formik.values.destinationPincode}
            onChange={formik.handleChange}
            error={formik.errors.destinationPincode}
            maxLength="6"
            pattern="[0-9]*"
          />

          <DropDown
            id="status"
            label={common.shipmentStatus}
            selectLabel={common.selectStatus}
            options={statuses}
            onChange={formik.handleChange}
            value={formik.values.status}
            error={formik.errors.status}
            required
          />
        </div>

        <TextArea
          id="notes"
          label={common.note}
          onChange={formik.handleChange}
          value={formik.values.notes}
        />

        <TextArea
          id="instructions"
          label={common.instructions}
          onChange={formik.handleChange}
          value={formik.values.instructions}
        />

        {/* Incoming */}
        <Checkbox
          id="isIncoming"
          checked={formik.values.isIncoming}
          onChange={formik.handleChange}
          error={formik.errors?.isIncoming}
        >
          <label htmlFor="acceptTerms" className="ms-2 ">
            Incoming
          </label>
        </Checkbox>

        <Button
          title={common.addShipment}
          className="w-full p-2 bg-blue-500 text-white rounded mt-4"
          onClick={() => {
            console.log("Handling submit...");
            formik.handleSubmit();
          }}
        />
        {!!isPending && <Spinner />}
      </form>
    </div>
  );
};
