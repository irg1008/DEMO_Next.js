import Color from "color";

const fieldColors = {
  errorRed: "#ff2424",
  validBlue: "#4ca6f5",
  shadowBlue: "rgba(3, 102, 214, 0.3)",
  shadowRed: "rgba(214, 3, 49, 0.3)",
};

const white = "#f7f7f7";

const yellow = "rgba(255, 235, 15, 1)";

const getTransparented = (color: string, alpha = 0.5) =>
  Color(color).alpha(alpha).rgb().string();

const getBrightened = (color: string, brightness = 0.2) =>
  Color(color).lighten(brightness).rgb().string();

const colors = {
  fieldColors,
  white,
  yellow,
  getTransparented,
  getBrightened,
};

export default colors;
