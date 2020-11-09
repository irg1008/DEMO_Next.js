import deepai from "deepai";
import { useState, useEffect } from "react";

deepai.setApiKey("f602915c-a65e-424f-a235-660928579d35");

const fetchColorized = async (imageURL: string) => {
  const res = await deepai.callStandardApi("colorizer", {
    image: imageURL,
  });
  console.log(res);
  const image = res.output_url;
  return image;
};

type Colorized = {
  img: string;
};

const Colorizer = ({ img }: Colorized) => {
  const [colorizedImg, setColorizedImg] = useState("");

  useEffect(() => {


    fetchColorized(img);
  }, []);

  return (
    <>
      <img src={img} alt="normal img" />
      <img src={colorizedImg} alt="bw to color img here" />
    </>
  );
};

export default Colorizer;
