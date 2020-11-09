import Head from "next/head";
import Colorizer from "temp/Colorizer";

const Home = () => (
  <>
    <Head>
      <title>{"Silk&Rock - Home"}</title>
    </Head>
    <header>
      <div>
        <h1>Hell</h1>
        <p>Yeah!</p>
        <Colorizer img="https://i.pinimg.com/originals/a6/0f/f4/a60ff4cc3342f51b11686e4274b2348d.jpg" />
      </div>
    </header>
  </>
);

export default Home;
