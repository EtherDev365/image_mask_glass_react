import "../assets/css/demo.css";
import "../assets/css/App.css";
import React from 'react'
import background from '../assets/images/1.png';
import BlackBack from '../assets/images/black.png';
import { useNavigate  } from 'react-router-dom';
function FirstPage() {
  const navigate  = useNavigate();
  const img = React.useRef();
  const glass = React.useRef();
  const button1 = React.useRef();
  const button2 = React.useRef();
  const button3 = React.useRef();
  const button1_Point = React.useRef();
  const button2_Point = React.useRef();
  const button3_Point = React.useRef();
  const [w, setW] = React.useState(120);
  const [h, setH] = React.useState(120);
  const [bw, setBW] = React.useState(100);

  React.useEffect(()=>{
    var cursorState = false
    var pos, x, y, zoom = 2;
    var buttonX1, buttonY1, buttonX1_point, buttonY1_point, button1_width, button1_point_width, button1_hight, button1_point_hight;
    var buttonX2, buttonY2, buttonX2_point, buttonY2_point, button2_width, button2_point_width, button2_hight, button2_point_hight;
    var buttonX3, buttonY3, buttonX3_point, buttonY3_point, button3_width, button3_point_width, button3_hight, button3_point_hight;
    var distance1, distance2, distance3, minDistance;
    glass.current= document.createElement("DIV");
    glass.current.setAttribute("class", "img-magnifier-glass");
    glass.current.setAttribute("id", "glass");
    var oldGlass = document.getElementById("glass")
    if( oldGlass )
      oldGlass.remove()
    img.current.parentElement.insertBefore(glass.current, img.current);
    glass.current.style.backgroundImage = "url('" + background + "')";
    glass.current.style.backgroundRepeat = "no-repeat";
    // glass.current.style.transitionDuration = "0.1s";
    // glass.current.style.width = "100px";
    // glass.current.style.height = "100px"
    // glass.current.style.transitionProperty = "width,height";
    glass.current.style.backgroundSize = (img.current.width * zoom) + "px " + (img.current.height * zoom) + "px";
    setBW(3);
    setW(glass.current.offsetWidth / 2);
    setH(glass.current.offsetHeight / 2);

    function moveMagnifier(e) {
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;

      distance1 = Math.sqrt(Math.pow(Math.abs(x-button1_Point.current.getBoundingClientRect().x),2)+Math.pow(Math.abs(y-button1_Point.current.getBoundingClientRect().y),2))
      distance2 = Math.sqrt(Math.pow(Math.abs(x-button2_Point.current.getBoundingClientRect().x),2)+Math.pow(Math.abs(y-button2_Point.current.getBoundingClientRect().y),2))
      distance3 = Math.sqrt(Math.pow(Math.abs(x-button3_Point.current.getBoundingClientRect().x),2)+Math.pow(Math.abs(y-button3_Point.current.getBoundingClientRect().y),2))

      minDistance = parseInt(getMinValue(distance1,distance2, distance3));

      //if(minDistance < 200){
        //glass.current.style.transform = "scale("+(0.7+500/minDistance)+") translate(0%, 0%)"

      //}else{
        //glass.current.style.transform = "scale(1) translate(0%, 0%)"
      //}

      buttonX1 = button1.current.getBoundingClientRect().x
      buttonX1_point = button1_Point.current.getBoundingClientRect().x
      button1_width = button1.current.getBoundingClientRect().width
      button1_hight = button1.current.getBoundingClientRect().height
      button1_point_width = button1_Point.current.getBoundingClientRect().width
      button1_point_hight = button1_Point.current.getBoundingClientRect().height
      buttonY1 = button1.current.getBoundingClientRect().y
      buttonY1_point = button1_Point.current.getBoundingClientRect().y

      buttonX2 = button2.current.getBoundingClientRect().x
      buttonX2_point = button2_Point.current.getBoundingClientRect().x
      button2_width = button2.current.getBoundingClientRect().width
      button2_hight = button1.current.getBoundingClientRect().height
      button2_point_width = button2_Point.current.getBoundingClientRect().width
      button2_point_hight = button2_Point.current.getBoundingClientRect().height
      buttonY2 = button2.current.getBoundingClientRect().y
      buttonY2_point = button2_Point.current.getBoundingClientRect().y

      buttonX3 = button3.current.getBoundingClientRect().x
      buttonX3_point = button3_Point.current.getBoundingClientRect().x
      button3_width = button3.current.getBoundingClientRect().width
      button3_hight = button1.current.getBoundingClientRect().height
      button3_point_width = button3_Point.current.getBoundingClientRect().width
      button3_point_hight = button3_Point.current.getBoundingClientRect().height
      buttonY3 = button3.current.getBoundingClientRect().y
      buttonY3_point = button3_Point.current.getBoundingClientRect().y

      if((x > buttonX1 &&x < buttonX1+button1_width && y > buttonY1 && y < buttonY1+button1_hight) ||
          (x > buttonX2 &&x < buttonX2+button2_width && y > buttonY2 && y < buttonY2+button2_hight) ||
          (x > buttonX3 &&x < buttonX3+button3_width && y > buttonY3 && y < buttonY3+button3_hight)){
          if(cursorState === false){
            cursorState = true;
            //glass.current.style.transform = "scale(2) translate(0%, 0%)"
          }
          if(x > buttonX1_point && x < buttonX1_point+button1_point_width && y > buttonY1_point && y < buttonY1_point+button1_point_hight){
            navigate('/Home', { replace: true });
          }
          if(x > buttonX2_point && x < buttonX2_point+button2_point_width && y > buttonY2_point && y < buttonY2_point+button2_point_hight){
            navigate('/Home', { replace: true });
            // navigate('/main#services', { replace: true });
          }
          if(x > buttonX3_point && x < buttonX3_point+button3_point_width && y > buttonY3_point && y < buttonY3_point+button3_point_hight){
            navigate('/Home', { replace: true });
            // navigate('/main#portfolio', { replace: true });
          }
      }else if(cursorState === true){
        cursorState = false;
        //glass.current.style.transform = "scale(1) translate(0%, 0%)"
      }
      /*prevent the magnifier glass from being positioned outside the image:*/
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /*set the position of the magnifier glass:*/
      glass.current.style.width = (100 + 10000/minDistance) + "px";
      glass.current.style.height =(100 + 10000/minDistance)+ "px";
      glass.current.style.left = (x-(100 + 10000/minDistance)/2) + "px";
      glass.current.style.top = (y-(100 + 10000/minDistance)/2) + "px";
      /*display what the magnifier glass "sees":*/
      glass.current.style.backgroundPosition = "-" + ((x * zoom) - ((100 + 10000/minDistance)/2) - w + bw) + "px -" + ((y * zoom) - ((100 + 10000/minDistance)/2) - h + bw) + "px";
    }
    function getMinValue(x,y,z){
      if(x < y){
        if(x < z){
          return x;
        }else{
          return z;
        }
      }else{
        if( y < z){
          return y;
        }else{
          return z;
        }
      }
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.current.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
    glass.current.addEventListener("mousemove", moveMagnifier);
    img.current.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    glass.current.addEventListener("touchmove", moveMagnifier);
    img.current.addEventListener("touchmove", moveMagnifier);
    return () => {
      glass.current.removeEventListener("mousemove", moveMagnifier);
      /*and also for touch screens:*/
      glass.current.removeEventListener("touchmove", moveMagnifier);
      // img.current.removeEventListener("touchmove", moveMagnifier);
    };
  },[bw, h, navigate, w])
  return (
    <>
      <div className="img-magnifier-container" >
        <img src={BlackBack} width="100%" height="100%" alt="error" ref={img}/>
        <div className='button1' ref={button1}>
          <div className='button1_point' ref={button1_Point}></div>
        </div>
        <div className='button2' ref={button2}>
          <div className='button2_point' ref={button2_Point}></div>
        </div>
        <div className='button3' ref={button3}>
          <div className='button3_point' ref={button3_Point}></div>
        </div>
      </div>
      <div className="title"><h2> Please find special Point, that point will lead you new page.</h2></div>
    </>
  );
}

export default FirstPage;
