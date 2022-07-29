import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
// import  getImages  from "../assets/images/1.png";
// import Arrows from "../components/Controls/Arrows";
import Dots from "../components/Controls/Dots";
import SlidesList from "../components/Controls/SlidesList";
import Header from "../components/Header";
import SignUp from "../components/SignUp";
export const SliderContext = createContext();

const Slider = function ({ width, height, autoPlay, autoPlayTime }) {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      setItems([
        "F5imagine will do it for you!",
        "Share your memories with your family and friends",
        "Edit with our world class editing tools",
        "Download the app or scroll down to learn more"
      ]);
    };
    loadData();
  }, []);

  useEffect(() => {
    // console.log(items)
  }, [items]);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  }

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  }

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length, slide]); // when images uploaded or slide changed manually we start timer

  return (
    <>
    <div className="background">
      <Header></Header>
      <div
        style={{ width, height }}
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <SliderContext.Provider
          value={{
            goToSlide,
            changeSlide,
            slidesCount: items.length,
            slideNumber: slide,
            items,
          }}
        >
          <SlidesList />
          <SignUp/>
          <Dots />
        </SliderContext.Provider>
      </div>
    </div>
    <div className="background-yellow">
      <Header></Header>
      <div
        style={{ width, height }}
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <SliderContext.Provider
          value={{
            goToSlide,
            changeSlide,
            slidesCount: items.length,
            slideNumber: slide,
            items,
          }}
        >
          <SlidesList />
          <SignUp/>
          <Dots />
        </SliderContext.Provider>
      </div>
    </div>
    </>
  );
};

Slider.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string
};

Slider.defaultProps = {
  autoPlay: false,
  autoPlayTime: 5000,
  width: "100%",
  height: "100%"
};

export default Slider;