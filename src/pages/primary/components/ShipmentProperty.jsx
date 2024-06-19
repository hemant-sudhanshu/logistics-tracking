import React from "react";

export const ShipmentProperty = ({ title, data, styleClass }) => {
  return (
    <div className={`flex flex-row space-x-2 ${styleClass}`}>
      <p>
        <b>{title}:</b>
      </p>
      <p>{data}</p>
    </div>
  );
};
