import React from "react";

export const ShipmentProperty = ({ title, data, styleClass }) => {
  return (
    <p className={styleClass}>
      <b>{title}: </b> {data}
    </p>
  );
};
