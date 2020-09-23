import Head from "next/head";
import Card from "components/atoms/Card";

const Home = () => (
  <>
    <Head>
      <title>{"Silk&Rock - Home"}</title>
    </Head>
    <header>
      <div>
        <h1>Hell</h1>
        <p>Yeah!</p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: "60%",
            margin: "auto",
            paddingTop: "40px",
          }}
        >
          <Card
            title="Perro"
            text="Menudo perro mas bonico aaahh"
            imgSrc="https://m.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/05/16/Pictures/_1571873a-58de-11e8-b431-73159b4b09e2.jpg"
          />
          <Card
            title="Perro"
            text="Menudo perro mas bonico aaahh"
            imgSrc="https://m.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/05/16/Pictures/_1571873a-58de-11e8-b431-73159b4b09e2.jpg"
          />
          <Card
            title="Perro"
            text="Menudo perro mas bonico aaahh"
            imgSrc="https://m.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/05/16/Pictures/_1571873a-58de-11e8-b431-73159b4b09e2.jpg"
          />
          <Card
            title="Perro"
            text="Menudo perro mas bonico aaahh"
            imgSrc="https://m.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/05/16/Pictures/_1571873a-58de-11e8-b431-73159b4b09e2.jpg"
          />
          <Card
            title="Perro"
            text="Menudo perro mas bonico aaahh"
            imgSrc="https://m.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/05/16/Pictures/_1571873a-58de-11e8-b431-73159b4b09e2.jpg"
          />
          <Card
            title="Perro"
            text="Menudo perro mas bonico aaahh"
            imgSrc="https://m.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/05/16/Pictures/_1571873a-58de-11e8-b431-73159b4b09e2.jpg"
          />
          <Card
            title="Perro"
            text="Menudo perro mas bonico aaahh"
            imgSrc="https://m.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/05/16/Pictures/_1571873a-58de-11e8-b431-73159b4b09e2.jpg"
          />
        </div>
      </div>
    </header>
  </>
);

export default Home;
