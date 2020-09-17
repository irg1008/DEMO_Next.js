import Head from "next/head";
import { ThemeStoreProvider } from "contexts/ThemeStore";
import { LayoutStoreProvider } from "contexts/LayoutStore";

type AppProps = {
  Component: React.ComponentType;
  pageProps: any;
};

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>{"Silk&Rock - Workwear - Uniformes Laborales"}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1, shrink-to-fit=no"
      />
    </Head>
    <ThemeStoreProvider>
      <LayoutStoreProvider>
        <Component {...pageProps} />
      </LayoutStoreProvider>
    </ThemeStoreProvider>
  </>
);

export default App;
