import React, { createContext, useContext, useState, useEffect } from "react";
import themes, { defaultTheme } from "styles/themes";
import { ThemeProvider } from "styled-components";
import Global from "styles/global";

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

  // On load => Get theme from local.
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") === "light" ? themes.light : themes.dark
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme === themes.light ? "light" : "dark");
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
