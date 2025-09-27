import React from "react";

const Input = ({ ...props }) => (
  <input
    {...props}
    className="border rounded px-3 py-2 w-full mb-2"
  />
);

export default Input;
