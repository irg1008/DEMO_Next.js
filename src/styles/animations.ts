import { keyframes } from "styled-components";

const fallDown = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    60%: {
        transform: translateY(0);
        opacity: 0;
    }
    70% {
        transform: translateY(10%)
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const fallFarRight = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    100% {
        transform: translateZ(0);
        opacity: 1;
    }
`;

const outLeft = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const flipY = keyframes`
    0% {
        transform: rotateY(0);
    }
    100% {
        transform: rotateY(360deg);
    }
`;

const scaleDown = keyframes`
    0% {
        transform: scale(100%);
    }
    100% {
        transform: scale(0);
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
  fallFarRight,
  scaleDown,
  fadeOut,
  fadeIn,
  outLeft,
};

export default animations;
