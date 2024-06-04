import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useShipmentDetailsQuery, useShipmentMutation } from "../../../queries";
import { Button, Spinner } from "../../../components";
import { routes, strings } from "../../../constants";
import { ShipmentProperty } from "../components";
import { formatDate, showSuccessToast } from "../../../utils";

export const ShipmentDetails = () => {
  const {
    primary: { common },
  } = strings;
  // Navigation hook
  const { shipmentId } = useParams();

  // API call to fetch shipmentdetails
  const {
    data: shipment,
    isPending,
    isError,
    isSuccess,
  } = useShipmentDetailsQuery({ id: shipmentId });

  // Navigation hook
  const navigate = useNavigate();

  const { mutateAsync } = useShipmentMutation({ id: shipmentId });

  const handleStatusUpdate = async ({ status }) => {
    //   Call API to update status..
    console.log("status....", status);
    const values = { status };

    try {
      await mutateAsync(values);
      // If shipment add succeeds, show success message
      showSuccessToast({ message: common.shipmentUpdateSuccess });
      navigate(routes.root, { replace: false });
    } catch (error) {
      // Handle sign up failure
      console.log(error);
    }
  };

  return (
    <div className="m-4 p-4 bg-secondary rounded text-black">
      {isPending || !shipment ? (
        <Spinner />
      ) : (
        <div className="divide-y divide-primary">
          <h1 className="pb-2 text-lg font-semibold">{shipment.title}</h1>
          <div className="flex flex-col pb-2 space-y-2">
            <div className="flex flex-col md:flex-row justify-between">
              <h3 className="text-primary">
                {common.shipmentId}: {shipment.shipmentId}
              </h3>
              <h3 className="text-primary">
                {common.date}: {formatDate(shipment.date)}
              </h3>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row justify-between">
                <ShipmentProperty
                  title={common.origin}
                  data={shipment.origin}
                  styleClass=""
                />
                <ShipmentProperty
                  title={common.destination}
                  data={shipment.destination}
                  styleClass=""
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <ShipmentProperty
                  title={common.shipmentDate}
                  data={formatDate(shipment.date)}
                  styleClass=""
                />
                <ShipmentProperty
                  title={common.deliveryDate}
                  data={formatDate(shipment.deliveryDate)}
                  styleClass=""
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between">
                <ShipmentProperty
                  title={common.status}
                  data={shipment.status}
                  styleClass=""
                />
                <ShipmentProperty
                  title={common.houseNo}
                  data={shipment.houseNo}
                  styleClass=""
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <ShipmentProperty
                  title={common.address1}
                  data={shipment.address1}
                  styleClass=""
                />
                <ShipmentProperty
                  title={common.address2}
                  data={shipment.address2}
                  styleClass=""
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <ShipmentProperty
                  title={common.state}
                  data={shipment.destinationState}
                  styleClass=""
                />
                <ShipmentProperty
                  title={common.pinCode}
                  data={shipment.destinationPincode}
                  styleClass=""
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <ShipmentProperty
                  title={common.note}
                  data={shipment.notes}
                  styleClass="md:mr-auto"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <ShipmentProperty
                  title={common.instructions}
                  data={shipment.instructions}
                  styleClass="md:mr-auto"
                />
              </div>

              {/* Staus buttons */}
              <div className="mt-8 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-2">
                <Button
                  title={common.transit}
                  className="bg-primary w-full md:w-1/4"
                  disabled={shipment.status !== ""}
                  onClick={() =>
                    handleStatusUpdate({ status: `${common.transit}` })
                  }
                />

                <Button
                  title={common.delayed}
                  className="bg-primary w-full md:w-1/4"
                  disabled={
                    shipment.status === `${common.delayed}` ||
                    shipment.status === `${common.delivered}`
                  }
                  onClick={() =>
                    handleStatusUpdate({ status: `${common.delayed}` })
                  }
                />

                <Button
                  title={common.delivered}
                  className="bg-primary w-full md:w-1/4"
                  disabled={shipment.status === `${common.delivered}`}
                  onClick={() =>
                    handleStatusUpdate({ status: `${common.delivered}` })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
