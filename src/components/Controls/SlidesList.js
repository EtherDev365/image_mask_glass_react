import React, { useContext } from "react";
import Slide from "./Slide";
import { SliderContext } from "../../pages/Slider";
import "../../assets/css/styles.scss";

export default function SlidesList() {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <div
      className="slide-list"
      // style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {/* {items.map((slide, index) => ( */}
        <Slide number={slideNumber} data={items[slideNumber]} />
      {/* ))} */}
    </div>
  );
}