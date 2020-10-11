import { Themes } from "styled-components";

const themes: Themes = {
  dark: {
    colors: {
      main: "#1fff88",
      light: "#2b2b2b",
      dark: "#fafafa",
      grey4: "#f5f5f5",
      grey3: "#ebebeb",
      grey2: "#545454",
      grey1: "#404040",
    },
  },
  light: {
    colors: {
      main: "#e85804",
      light: "#f7f7f7",
      dark: "#2b2b2b",
      grey1: "#f5f5f5",
      grey2: "#ebebeb",
      grey3: "#545454",
      grey4: "#404040",
    },
  },
};

const defaultTheme = themes.dark;

export { defaultTheme };

export default themes;
