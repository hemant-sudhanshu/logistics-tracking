import React from "react";
import { Button } from "../../../../components";

export const UpdateStatusButton = ({ title, ...rest }) => {
  return (
    <div className="bg-secondary flex justify-center p-8">
      <Button
        title={title}
        className="bg-primary w-full md:w-1/4 text-color"
        {...rest}
      />
    </div>
  );
};
