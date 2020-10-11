import { useState, useEffect } from "react";
import Styled from "./CookiesBanner.styles";

const CookiesBanner = () => {
  const [hiden, setHiden] = useState(false);
  const [animate, setAnimate] = useState(false);

  const localStorageFlag = "cookies-banner";

  const hideBanner = () => {
    setAnimate(true);
    localStorage.setItem(localStorageFlag, "hiden");
  };

  useEffect(() => {
    setHiden(!!localStorage.getItem(localStorageFlag));
  }, []);

  /**
   * Accepts cookies.
   *
   */
  const acceptCookies = () => hideBanner();

  return (
    !hiden && (
      <Styled.Banner {...{ animate }} onAnimationEnd={() => setHiden(true)}>
        <Styled.Text>
          This page only uses neccesary cookies. Accept to let us know you agree
          with this terms
        </Styled.Text>
        <Styled.Buttons>
          <Styled.Button onClick={acceptCookies}>Accept</Styled.Button>
        </Styled.Buttons>
      </Styled.Banner>
    )
  );
};

export default CookiesBanner;
