import React from "react";
import { useNavigate } from "react-router-dom";
import { routes, strings } from "../../../../../constants";
import { ShipmentProperty } from "../../../components";
import { formatDate } from "../../../../../utils";

export const ShipmentItem = React.memo(({ shipment }) => {
  const {
    primary: { common },
  } = strings;

  const navigate = useNavigate();

  const navigateToShipmentDetails = (id) => {
    navigate(`${routes.shipments}/${id}`);
  };
  return (
    <button
      key={shipment._id}
      type="button"
      className="bg-secondary m-2 p-4 text-black rounded shadow-md shadow-cyan-500/50 hover:bg-cyan-200/50 transition-colors duration-300"
      onClick={() => navigateToShipmentDetails(shipment._id)}
    >
      <div className="divide-y divide-primary">
        <div className="flex flex-col pb-2 items-start md:flex-row md:justify-between">
          <h3 className="text-primary font-bold">
            {common.shipmentId}: {shipment.shipmentId}
          </h3>
          <h3 className="text-primary">
            {common.date}: {formatDate(shipment.date)}
          </h3>
        </div>
        <div className="flex flex-col pt-2">
          <div className="flex flex-col items-start md:flex-row md:justify-between">
            <ShipmentProperty
              title={common.title}
              data={shipment.title}
              styleClass=""
            />
          </div>
          <div className="flex flex-col items-start md:flex-row md:justify-between">
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
          <div className="flex flex-col items-start md:flex-row md:justify-between">
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

          <div className="flex flex-col items-start md:flex-row md:justify-between">
            <ShipmentProperty
              title={common.status}
              data={shipment.status}
              styleClass=""
            />
            <ShipmentProperty
              title={common.type}
              data={
                shipment.isIncoming === true ? common.incoming : common.outgoing
              }
              styleClass=""
            />
          </div>
        </div>
      </div>
    </button>
  );
});
