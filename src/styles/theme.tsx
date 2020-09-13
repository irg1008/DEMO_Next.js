import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import Global from "./global";

const theme: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    primary: "#ff711f",
    secondary: "#1fff88",
  },
};

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global />
    {children}
  </ThemeProvider>
);

export default Theme;
