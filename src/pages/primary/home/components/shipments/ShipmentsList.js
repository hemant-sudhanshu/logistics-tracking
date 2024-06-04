import React from "react";
import { ShipmentItem } from "./ShipmentItem";

export const ShipmentsList = ({ shipments }) => {
  return (
    <div className="flex flex-col">
      {shipments.map((shipment) => {
        return <ShipmentItem shipment={shipment} />;
      })}
    </div>
  );
};
