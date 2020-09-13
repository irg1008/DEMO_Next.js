import React from "react";
import Head from "next/head";
import Theme from "styles/theme";

const App: React.FC<{
  Component: React.ComponentType;
  pageProps: any;
}> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Next.js App</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&amp;display=swap"
        rel="stylesheet"
      />
    </Head>
    <Theme>
      <Component {...pageProps} />
    </Theme>
  </>
);

export default App;
