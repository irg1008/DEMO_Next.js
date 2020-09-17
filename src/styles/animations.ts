import { keyframes } from "styled-components";

const fallDown = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const flipY = keyframes`
    0% {
        transform: rotateY(0);
    }
    100% {
        transform: rotateY(180deg);
    }
`;

const shake = keyframes`
    30%,
    50% {
        transform: rotate(0deg);
    }
    35% {
        transform: rotate(1deg);
    }
    45% {
        transform: rotate(-1deg);
    }
`;

const animations = {
  fallDown,
  shake,
  flipY,
};

export default animations;
