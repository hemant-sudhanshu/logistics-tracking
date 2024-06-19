import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useShipmentDetailsQuery } from "../../../hooks/queries";
import { Spinner } from "../../../components";
import { routes, strings } from "../../../constants";
import { ShipmentProperty, ShipmentStatusProperty } from "../components";
import { formatDate } from "../../../utils";
import { ShipmentAddress, UpdateStatusButton } from "./components";

export const ShipmentDetails = () => {
  const {
    primary: { common },
  } = strings;

  // Navigation hook
  const { shipmentId } = useParams();

  // API call to fetch shipmentdetails
  const { data: shipment, isPending } = useShipmentDetailsQuery({
    id: shipmentId,
  });

  // Navigation hook
  const navigate = useNavigate();

  const handleStatusUpdate = async () => {
    // Navigate to shipment action page
    navigate(`${routes.shipmentAction}/${shipmentId}`, { replace: false });
  };

  return (
    <div className="m-4 p-4 bg-secondary rounded text-black max-w-6xl mx-auto md:mt-10">
      {isPending || !shipment ? (
        <Spinner />
      ) : (
        // Main container
        <div className="divide-y divide-primary">
          {/* Heading */}
          <h1 className="pb-2  font-bold text-center">{shipment.title}</h1>

          {/* Sub-Container */}
          <div className="flex flex-col pb-2 space-y-2">
            {/* ShipmentId and Date */}
            <div className="flex flex-col md:flex-row justify-between">
              <h3 className="text-primary">
                {common.shipmentId}: {shipment.shipmentId}
              </h3>
              <h3 className="text-primary">
                {common.date}: {formatDate(shipment.date)}
              </h3>
            </div>

            {/* Shipment Address */}
            <div className=" flex flex-col bg-light p-4 space-y-4 rounded md:flex-row md:space-x-4 md:space-y-0">
              <ShipmentAddress
                title={common.originAddress}
                address={shipment.originAddress}
                className="w-full"
              />
              <ShipmentAddress
                title={common.destinationAddress}
                address={shipment.destinationAddress}
                className="w-full"
              />
            </div>

            {/* Date, Delivery date, status */}
            <div className="flex flex-col bg-light p-4 space-y-4 rounded md:flex-row md:space-x-4 md:space-y-0">
              <div className="bg-secondary rounded p-2 w-full">
                <ShipmentProperty
                  title={common.shipmentDate}
                  data={formatDate(shipment.date)}
                  styleClass=""
                />
              </div>
              <div className="bg-secondary rounded p-2 w-full">
                <ShipmentProperty
                  title={common.deliveryDate}
                  data={formatDate(shipment.deliveryDate)}
                  styleClass=""
                />
              </div>
              <div className="bg-secondary rounded p-2 w-full">
                <ShipmentStatusProperty
                  title={common.status}
                  status={shipment.status}
                  styleClass=""
                />
              </div>
            </div>

            {/* Actions */}
            {shipment.actions && shipment.actions.length > 0 && (
              <h1>{JSON.stringify(shipment.actions)}</h1>
            )}

            {/* Notes, Instructions */}
            <div className="flex flex-col bg-light p-4 space-y-4 rounded md:flex-row md:space-x-4 md:space-y-0">
              <div className="bg-secondary rounded p-2 w-full">
                <ShipmentProperty
                  title={common.note}
                  data={shipment.notes}
                  styleClass=""
                />
              </div>
              <div className="bg-secondary rounded p-2 w-full">
                <ShipmentProperty
                  title={common.instructions}
                  data={shipment.instructions}
                  styleClass=""
                />
              </div>
            </div>

            {/* Status update */}
            {shipment.status !== common.delivered && (
              <UpdateStatusButton
                title={common.updateStatus}
                onClick={handleStatusUpdate}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
