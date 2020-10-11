import "styled-components";

declare module "styled-components" {
  export interface Themes {
    light: DefaultTheme;
    dark: DefaultTheme;
  }
  interface DefaultTheme {
    colors: {
      main: string;
      light: string;
      dark: string;
      grey4: string;
      grey3: string;
      grey2: string;
      grey1: string;
    };
  }
}
