import Styled from "./WaveLoader.styles";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "150%",
  },
};

const loadingCircleTransition = {
  duration: 0.2,
  yoyo: Infinity,
  ease: "easeInOut",
};

const WaveLoader = () => {
  return (
    <Styled.WaveLoaderWrapper>
      <Styled.WaveLoaderInnerWrapper
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <Styled.WaveLoader
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <Styled.WaveLoader
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <Styled.WaveLoader
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </Styled.WaveLoaderInnerWrapper>
    </Styled.WaveLoaderWrapper>
  );
};

export default WaveLoader;
