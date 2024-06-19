import React from "react";
import { useParams } from "react-router-dom";
import { ShipmentActionForm } from "./components";

export const ShipmentAction = () => {
  // Navigation hook
  const { shipmentId } = useParams();

  return (
    <div className="text-black p-4 ">
      <ShipmentActionForm shipmentId={shipmentId} />
    </div>
  );
};
