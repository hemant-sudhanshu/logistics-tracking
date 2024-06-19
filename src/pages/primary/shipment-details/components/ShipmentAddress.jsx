import React from "react";
import { ShipmentProperty } from "../../components";
import { strings } from "../../../../constants";

export const ShipmentAddress = ({ address, title, className }) => {
  const {
    primary: { common },
  } = strings;

  return (
    <div className={`flex flex-col bg-secondary rounded p-2 ${className}`}>
      <h2 className="pb-2 text-center ">{title}</h2>
      <ShipmentProperty
        title={common.houseNo}
        data={address.houseNo}
        styleClass=""
      />
      <ShipmentProperty
        title={common.address1}
        data={address.address1}
        styleClass=""
      />
      <ShipmentProperty
        title={common.address2}
        data={address.address2}
        styleClass=""
      />
      <ShipmentProperty
        title={common.destination}
        data={address.city}
        styleClass=""
      />
      <ShipmentProperty
        title={common.state}
        data={address.state}
        styleClass=""
      />
      <ShipmentProperty
        title={common.pinCode}
        data={address.pinCode}
        styleClass=""
      />
    </div>
  );
};
