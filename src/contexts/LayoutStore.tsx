import React, { createContext, useContext, useState, useEffect } from "react";
import Layout from "components/templates/Layout";

type Context = {
  hideNavbar: () => void;
  hideFooter: () => void;
  showNavbar: () => void;
  showFooter: () => void;
  hideAll: () => void;
  showAll: () => void;
};

const initialContext: Context = {
  hideNavbar: () => {},
  hideFooter: () => {},
  showNavbar: () => {},
  showFooter: () => {},
  hideAll: () => {},
  showAll: () => {},
};

const LayoutStoreContext = createContext(initialContext);

const useLayoutStore = () => useContext(LayoutStoreContext);

const LayoutStoreProvider: React.FC = ({ children }) => {
  const [hidenNavbar, setHidenNavbar] = useState(false);
  const [hidenFooter, setHidenFooter] = useState(false);

  const hideNavbar = () => setHidenNavbar(true);
  const hideFooter = () => setHidenFooter(true);

  const showNavbar = () => setHidenNavbar(false);
  const showFooter = () => setHidenFooter(false);

  const hideAll = () => {
    hideNavbar();
    hideFooter();
  };

  const showAll = () => {
    showNavbar();
    showFooter();
  };

  return (
    <LayoutStoreContext.Provider
      value={{
        hideNavbar,
        hideFooter,
        showNavbar,
        showFooter,
        hideAll,
        showAll,
      }}
    >
      <Layout {...{ hidenNavbar, hidenFooter }}>{children}</Layout>
    </LayoutStoreContext.Provider>
  );
};

export { LayoutStoreProvider, useLayoutStore };
