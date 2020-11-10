import { useEffect, useState } from "react";
import Colorizer from "./Colorizer";

const links = [];
for (let i = 1; i <= 35; i++) {
  links[i - 1] =
    "http://fulloftaste.com/wp-content/uploads/2015/10/XX-Century-at-Black-and-White-Photos-";
  if (i < 10) {
    links[i - 1] += 0;
  }
  links[i - 1] += i + ".jpg";
}

const StackColorizer = () => {
  return (
    <>
      {links.map((link, index) => {
        setTimeout(() => {
          console.log(link);
        }, 1000 * index);
        return <Colorizer key={Math.random()} img={link} />;
      })}
    </>
  );
};

export default StackColorizer;
