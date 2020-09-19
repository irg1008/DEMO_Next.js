import { useState } from "react";
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

  const Side =
    theme === themes.light ? (
      <DarkIcon fontSize="inherit" />
    ) : (
      <LightIcon fontSize="inherit" />
    );

  const [animate, setAnimate] = useState(false);

  const onClick = () => {
    setAnimate(!animate);
    toggleTheme();
  };

  return (
    <Styled.Wrapper {...{ onClick, animate }}>
      <IconButton
        style={{
          border: `1px solid ${theme.colors.dark}`,
          position: "relative",
        }}
        color="inherit"
      >
        <Styled.Side style={{ transform: "rotateY(180deg)" }}>
          {Side}
        </Styled.Side>
        <Styled.Side>{Side}</Styled.Side>
      </IconButton>
    </Styled.Wrapper>
  );
};

export default ThemeSwitch;
