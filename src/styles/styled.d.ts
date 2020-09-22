import "styled-components";

declare module "styled-components" {
  export interface Themes {
    light: DefaultTheme;
    dark: DefaultTheme;
  }
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary: string;
      primaryLight: string;
      secondary: string;
      secondaryLight: string;
      light: string;
      lightOpacity: string;
      dark: string;
      darkOpacity: string;
      grey4Opacity: string;
      grey3Opacity: string;
      grey2Opacity: string;
      grey1Opacity: string;
      grey4: string;
      grey3: string;
      grey2: string;
      grey1: string;
    };
  }
}
