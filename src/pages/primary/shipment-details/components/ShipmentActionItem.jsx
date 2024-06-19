import React from "react";
import { CircleCheck } from "../../../../assets/svgs/CircleCheck";
import { strings } from "../../../../constants";
import { capitalizeFirstLetter } from "../../../../utils";

export const ShipmentActionItem = ({ action, className }) => {
  const {
    primary: { common },
  } = strings;

  return (
    <div className="max-w-lg mx-auto flex flex-row space-x-4 mt-1 p-2 rounded items-center bg-teal">
      <CircleCheck className="h-10 w-10 fill-green" />
      <div className="flex flex-col">
        <h4>
          {common.shipment} {capitalizeFirstLetter(action.action)}
        </h4>
        <p className="text-light text-sm">
          {common.shipmentScannedAt} {action.location}
        </p>
      </div>
    </div>
  );
};
