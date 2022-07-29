import React from "react";
import SlideTitle from "./SlideTitle";
import SlideImage from "./SlideImage";
import "../../assets/css/styles.scss";


export default function Slide(data) {
  const textDom = React.useRef();
  const slideDom = React.useRef();
  const newDom = React.useRef();
  const span = React.useRef();
  React.useEffect(()=>{
    slideDom.current.innerHTML =""
    newDom.current= document.createElement("DIV");
    newDom.current.setAttribute("class", "slide-title item-text");
    newDom.current.appendChild(document.createElement("P").appendChild(document.createTextNode(data.data)))
    span.current = document.createElement("BUTTON");
    span.current.setAttribute("class", "DownLoad");
    span.current.appendChild(document.createTextNode("Download App"))
    newDom.current.appendChild(span.current)
    slideDom.current.appendChild(newDom.current);
  },[data])
  
  return (
    <div className="slide" ref={slideDom}>
      {/* <SlideImage src={data} alt={'title'} /> */}
      {/* <SlideTitle title={data.data} /> */}
      {/* <div className={'slide-title item-' + (data.number + 1)}> */}
      <div className='slide-title item-text' ref={textDom}>
        <p>{data.data}</p>
        <button className="DownLoad">
          Download APP
        </button>
      </div>
      
      {/* <p className="item-2">You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe.</p> */}

      {/* <p className="item-3">You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes.</p> */}
    </div>
  );
}