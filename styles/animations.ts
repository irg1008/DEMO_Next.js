import { keyframes } from "styled-components";

const fallDown = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    60% {
        transform: translateY(15%);
    }
    100% {
        transform: translateY(0);
        opacity: 1;
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
};

export default animations;
