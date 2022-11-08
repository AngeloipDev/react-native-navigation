import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = () => (
  <Svg
    fill="#7d5fff"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width={55}
    height={55}
  >
    <Path d="M25 2c-4.22 0-8.17 1.14-11.57 3.13l20.72 15.14L38.8 6.61A22.923 22.923 0 0 0 25 2zM11.64 6.29C5.81 10.46 2 17.3 2 25c0 1.73.19 3.42.57 5.04l20.74-15.22-11.67-8.53zm28.81 1.68L32.27 32H46.9c.72-2.21 1.1-4.56 1.1-7 0-6.74-2.92-12.81-7.55-17.03zM25 16.06l-8.44 6.19L19.71 32h10.45l3.32-9.75L25 16.06zM14.87 23.5 3.13 32.11c2.77 8.52 10.4 14.87 19.59 15.78L14.87 23.5zM20.35 34l4.52 14H25c9.49 0 17.65-5.78 21.16-14H20.35z" />
  </Svg>
);

export default SvgComponent;
