import React, { createContext, useContext, useState, useEffect } from "react";
import themes, { defaultTheme } from "styles/themes";
import { ThemeProvider } from "styled-components";
import Global from "styles/global";
import axios from "axios";

type Context = {
  toggleTheme: () => void;
};

const initialContext: Context = {
  toggleTheme: () => {},
};

const ThemeStoreContext = createContext(initialContext);

const useThemeStore = () => useContext(ThemeStoreContext);

const ThemeStoreProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  // On load => Get theme from api.
  useEffect(() => {
    // const themeAPI = `${window.location.origin}/api/theme`;

    const fetchTheme = async () => {
      //const response = await axios.get(themeAPI);
      //const responseTheme = response.data.theme;

      const responseTheme = JSON.parse(localStorage.getItem("theme"));

      if (responseTheme) {
        const responsePrimary = responseTheme.colors.primary;
        if (responsePrimary !== theme.colors.primary) {
          setTheme(
            responsePrimary === themes.light.colors.primary
              ? themes.light
              : themes.dark
          );
        }
      }
    };

    fetchTheme();
  }, []);

  useEffect(() => {
    // const themeAPI = `${window.location.origin}/api/theme`;

    const updateTheme = async () => {
      // await axios.post(themeAPI, { theme });

      localStorage.setItem("theme", JSON.stringify(theme));
    };

    updateTheme();
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === themes.light ? themes.dark : themes.light);

  return (
    <ThemeStoreContext.Provider value={{ toggleTheme }}>
      <ThemeProvider {...{ theme }}>
        <Global />
        {children}
      </ThemeProvider>
    </ThemeStoreContext.Provider>
  );
};

export { ThemeStoreProvider, useThemeStore };
