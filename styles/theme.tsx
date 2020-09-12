import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import Global from "./global";

const theme: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    main: "#fff",
    secondary: "#000",
  },
};

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global />
    {children}
  </ThemeProvider>
);

export default Theme;
