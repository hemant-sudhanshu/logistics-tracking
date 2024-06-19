import React from "react";
import { capitalizeFirstLetter } from "../../../utils";

export const ShipmentStatusProperty = ({ title, status, styleClass }) => {
  const statusTextColor = "yellow";
  return (
    <div className={`flex flex-row space-x-2 ${styleClass}`}>
      <p>
        <b>{title}: </b>
      </p>
      <p className="text-primary">
        {status ? capitalizeFirstLetter(status) : ""}
      </p>
    </div>
  );
};
