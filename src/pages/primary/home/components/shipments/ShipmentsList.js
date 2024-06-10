import React from "react";
import { ShipmentItem } from "./ShipmentItem";

export const ShipmentsList = ({ shipments }) => {
  return (
    <div className="flex flex-col">
      {shipments.map((shipment) => {
        return <ShipmentItem key={shipment._id} shipment={shipment} />;
      })}
    </div>
  );
};
