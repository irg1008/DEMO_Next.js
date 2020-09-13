import React from "react";

type LabelProps = {
  name: string;
  label: string;
};

const Label: React.FC<LabelProps> = ({ name, label }) => (
  <label htmlFor={name}>{label}</label>
);

export default Label;
