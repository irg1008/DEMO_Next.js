import styled from "styled-components";
import { motion } from "framer-motion";

const WaveLoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WaveLoaderInnerWrapper = styled(motion.div)`
  width: 3rem;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

const WaveLoader = styled(motion.span)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${({ theme }) => theme.colors.grey3};
  border-radius: 0.25rem;
`;

const Styled = {
  WaveLoaderInnerWrapper,
  WaveLoader,
  WaveLoaderWrapper,
};

export default Styled;
