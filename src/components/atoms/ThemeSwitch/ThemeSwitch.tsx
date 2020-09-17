import Styled from "./ThemeSwitch.styles";
import { useThemeStore } from "contexts/ThemeStore";
import { IconButton } from "@material-ui/core";
import {
  WbSunnyRounded as LightIcon,
  Brightness2Rounded as DarkIcon,
} from "@material-ui/icons";
import { useTheme } from "styled-components";
import themes from "styles/themes";

const ThemeSwitch = () => {
  const { toggleTheme } = useThemeStore();
  const theme = useTheme();
  const isDark = theme === themes.dark;

  return (
    <Styled.Wrapper>
      <IconButton
        style={{
          border: `1px solid ${theme.colors.dark}`,
          width: "32px",
          height: "32px",
          fontSize: "16px",
        }}
        color="inherit"
        onClick={toggleTheme}
      >
        {isDark ? (
          <LightIcon fontSize="inherit" />
        ) : (
          <DarkIcon fontSize="inherit" />
        )}
      </IconButton>
    </Styled.Wrapper>
  );
};

export default ThemeSwitch;
