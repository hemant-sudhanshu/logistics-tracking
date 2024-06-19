import React from "react";
import { ShipmentActionItem } from "./ShipmentActionItem";
import { strings } from "../../../../constants";

export const ShipmentActions = ({ actions, className }) => {
  const {
    primary: { common },
  } = strings;
  return (
    <div className="flex flex-col bg-light p-4 space-y-4 rounded md:flex-row md:space-x-4 md:space-y-0">
      <div className={`w-full bg-secondary rounded p-2 ${className}`}>
        <h2 className="pb-2 text-center ">{common.actions}</h2>
        {actions.map((action) => (
          <ShipmentActionItem action={action} />
        ))}
      </div>
    </div>
  );
};
