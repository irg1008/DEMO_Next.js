import React from "react";
import djiLogo from "/dji-logo.png";

type LogoProps = {
  color?: string;
  height?: string;
};

const Logo: React.FC<LogoProps> = ({ color, height }) => (
  <img src={djiLogo} alt="dji-logo" />
);

export default Logo;
