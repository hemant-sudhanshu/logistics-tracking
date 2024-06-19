import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { staticData, shipmentSchema, strings } from "../../../../constants";
import { Button, DropDown, Spinner } from "../../../../components";
import { useShipmentActionMutation } from "../../../../hooks/queries";
import { showSuccessToast } from "../../../../utils";
import { useAuthContext } from "../../../../hooks";

/**
 * Yup schema for sign-up page validation
 */
const ShipmentSchema = Yup.object().shape({
  status: shipmentSchema.status, // Validation schema for status
  action: shipmentSchema.action, // Validation schema for action
  location: shipmentSchema.location, // Validation schema for location
});

export const ShipmentActionForm = ({ shipmentId }) => {
  // Constants for localization
  const {
    primary: { common },
  } = strings;

  const { cities, statuses, actions } = staticData;

  // Auth Hook
  const { user } = useAuthContext();

  // Navigation hook
  const navigate = useNavigate();

  // API call for add shipment
  const { mutateAsync, isPending } = useShipmentActionMutation({
    id: shipmentId,
  });

  const formik = useFormik({
    initialValues: {
      status: "",
      action: "",
      location: "",
      updatedBy: "",
    },
    validationSchema: ShipmentSchema,
    onSubmit: async (values) => {
      // Call add shipment api
      const newValues = {
        status: values.status.toLowerCase(),
        action: {
          action: values.action.toLowerCase(),
          updatedBy: user.role,
          location: values.location,
        },
      };

      try {
        await mutateAsync(newValues);
        formik.resetForm();
        // If shipment action add succeeds, show success message
        showSuccessToast({ message: common.shipmentUpdateSuccess });
        // Navigate back to previous page.
        navigate(-1);
      } catch (error) {
        // Handle sign up failure
        console.log(error);
      }
    },
  });

  return (
    <div className="max-w-3xl mx-auto w-full p-8 bg-primary rounded">
      <h1 className="text-2xl font-bold mt-4 mb-4 text-center">
        {common.updateStatus}
      </h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-4">
          <DropDown
            id="status"
            label={common.status}
            selectLabel={common.selectStatus}
            options={statuses}
            onChange={formik.handleChange}
            value={formik.values.status}
            error={formik.touched.status && formik.errors.status}
            {...formik.getFieldProps("status")}
            required
          />
          <DropDown
            id="location"
            label={common.location}
            selectLabel={common.selectCity}
            options={cities}
            onChange={formik.handleChange}
            value={formik.values.location}
            error={formik.touched.location && formik.errors.location}
            {...formik.getFieldProps("location")}
            required
          />
          <DropDown
            id="action"
            label={common.action}
            selectLabel={common.selectAction}
            options={actions}
            onChange={formik.handleChange}
            value={formik.values.action}
            error={formik.touched.action && formik.errors.action}
            {...formik.getFieldProps("action")}
            required
          />
        </div>

        <Button
          title={common.addAction}
          className="w-full p-2 mt-4"
          onClick={() => {
            formik.handleSubmit();
          }}
        />
        {!!isPending && <Spinner />}
      </form>
    </div>
  );
};
