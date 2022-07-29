import React from "react";
import "../../assets/css/styles.scss";

export default function SlideImage({ src, alt }) {
  return <img src={src.data} alt={alt} className="slide-image" />;
}