import React from "react";
import { capitalizeFirstLetter } from "../../../utils";

export const ShipmentStatusProperty = ({ title, status, styleClass }) => {
  const statusTextColor = getStatusTextColor(status);
  console.log("statusTextColor:", statusTextColor, status);

  return (
    <div className={`flex flex-row space-x-2 ${styleClass}`}>
      <p>
        <b>{title}: </b>
      </p>
      <p className={`${statusTextColor}`}>
        <b>{status ? capitalizeFirstLetter(status) : ""}</b>
      </p>
    </div>
  );
};

const getStatusTextColor = (status) => {
  console.log("status:", status);
  if (status === "initiated" || status === "processed") {
    return "text-teal";
  } else if (status === "delayed") {
    return "text-red";
  } else {
    return "text-green";
  }
};
