import React, { useContext } from "react";
import { SliderContext } from "../../pages/Slider";

import "../../assets/css/styles.scss";

export default function Arrows() {
  const { changeSlide } = useContext(SliderContext);
  return (
    <div className="arrows">
      <div className="arrow left" onClick={() => changeSlide(-1)} />
      <div className="arrow right" onClick={() => changeSlide(1)} />
    </div>
  );
}