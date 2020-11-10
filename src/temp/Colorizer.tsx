import deepai from "deepai";
import { useState, useEffect } from "react";
import styled from "styled-components";

deepai.setApiKey("f602915c-a65e-424f-a235-660928579d35");

const fetchColorizedImage = async (imageURL: string) => {
  const res = await deepai.callStandardApi("colorizer", {
    image: imageURL,
  });
  const image: string = res.output_url;
  return image;
};

type Colorized = {
  img: string;
};

const Colorizer = ({ img }: Colorized) => {
  const [colorizedImg, setColorizedImg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getImage = async () => {
      const imageString = await fetchColorizedImage(img);
      setColorizedImg(imageString);
      setLoading(false);
    };

    getImage();
  }, [img]);

  return (
    <ColorizerStyled>
      <img src={img} alt="normal img" />
      {loading ? (
        "Loading..."
      ) : (
        <img src={colorizedImg} alt="bw to color img here" />
      )}
    </ColorizerStyled>
  );
};

export default Colorizer;

const ColorizerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  align-items: center;
  & > img {
    width: 900px;
  }
`;
