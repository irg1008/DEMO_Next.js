import { useState } from "react";
import Styled from "./Card.styles";

type CardProps = {
  title: string;
  text: string;
  imgSrc: string;
};

const Card = ({ title, text, imgSrc }: CardProps) => (
  <Styled.CardWrapper>
    <Styled.CardImg src={imgSrc} />
    <Styled.CardTextWrapper>
      <Styled.CardTitle>{title}</Styled.CardTitle>
      <Styled.CardText>{text}</Styled.CardText>
    </Styled.CardTextWrapper>
  </Styled.CardWrapper>
);

export default Card;
