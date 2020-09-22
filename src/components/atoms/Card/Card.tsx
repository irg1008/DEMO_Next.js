import { useState } from "react";
import Styled from "./Card.styles";

const Card = () => {
  const [hovering, setHovering] = useState(false);

  return (
    <Styled.CardWrapper
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Styled.CardImg {...{ hovering }} src="https://i.imgur.com/E4cOSLw.jpg" />
      <Styled.CardTextWrapper {...{ hovering }}>
        <Styled.CardTitle>Title</Styled.CardTitle>
        <Styled.CardText>Text</Styled.CardText>
      </Styled.CardTextWrapper>
    </Styled.CardWrapper>
  );
};

export default Card;
