import Head from "next/head";
import Error from "components/templates/Error";

const NotFound = () => (
  <>
    <Head>
      <title>{"Silk&Rock - 404"}</title>
    </Head>
    <Error error={404} text="I'm sorry, you are lost." />
  </>
);

export default NotFound;
