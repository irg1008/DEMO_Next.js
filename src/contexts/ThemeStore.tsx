import React, { createContext, useContext, useState, useEffect } from "react";
import themes, { defaultTheme } from "styles/themes";
import { ThemeProvider } from "styled-components";
import Global from "styles/global";
import axios from "axios";

type Context = {
  toggleTheme: () => void;
  themeLoaded: boolean;
};

const initialContext: Context = {
  toggleTheme: () => {},
  themeLoaded: false,
};

const ThemeStoreContext = createContext(initialContext);

const useThemeStore = () => useContext(ThemeStoreContext);

const ThemeStoreProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [themeLoaded, setThemeLoaded] = useState(initialContext.themeLoaded);

  useEffect(() => {
    const fetchTheme = async () => {
      const response = await axios.get("http://localhost:3000/api/theme");
      const respondedTheme = response.data.theme;

      // Only set the api theme if ever changed. If not => Set to default.
      respondedTheme !== null &&
        respondedTheme !== theme &&
        setTheme(respondedTheme);

      // Set response has finish.
      setThemeLoaded(true);
    };

    fetchTheme();
  }, []);

  useEffect(() => {
    // On theme change => API will store data.
    const updateTheme = async () => {
      await axios.post("http://localhost:3000/api/theme", {
        theme,
      });
    };

    updateTheme();
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === themes.light ? themes.dark : themes.light);

  return (
    <ThemeStoreContext.Provider value={{ toggleTheme, themeLoaded }}>
      <ThemeProvider {...{ theme }}>
        <Global />
        {themeLoaded && children}
      </ThemeProvider>
    </ThemeStoreContext.Provider>
  );
};

export { ThemeStoreProvider, useThemeStore };
