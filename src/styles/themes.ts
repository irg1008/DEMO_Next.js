import { Themes } from "styled-components";

const themes: Themes = {
  dark: {
    borderRadius: "5px",
    colors: {
      primary: "#1fff88",
      primaryLight: "#75ffb6",
      secondary: "#f7f7f7",
      secondaryLight: "#ff9659",
      light: "#2b2b2b",
      lightOpacity: "rgba(43, 43, 43, 0.5)",
      dark: "#fafafa",
      darkOpacity: "rgba(250, 250, 250, 0.5)",
      grey4: "#f5f5f5",
      grey3: "#ebebeb",
      grey2: "#545454",
      grey1: "#404040",
    },
  },
  light: {
    borderRadius: "5px",
    colors: {
      primary: "#ff711f",
      primaryLight: "#ff9659",
      secondary: "#1fff88",
      secondaryLight: "#75ffb6",
      light: "#f7f7f7",
      lightOpacity: "rgba(250, 250, 250, 0.5)",
      dark: "#2b2b2b",
      darkOpacity: "rgba(43, 43, 43, 0.5)",
      grey1: "#f5f5f5",
      grey2: "#ebebeb",
      grey3: "#545454",
      grey4: "#404040",
    },
  },
};

const defaultTheme = themes.light;

export { defaultTheme };

export default themes;
