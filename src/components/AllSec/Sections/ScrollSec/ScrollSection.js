import React, { useRef, useState } from "react";
import ScrollRest from "./ScrollRest";
import classes from "./styles/section.module.css";
import Section from "../../../UI/Section";

const ScrollSection = ({ data, heading }) => {
  const conRef = useRef(null);
  const [move, setMove] = useState(0);

  const getDetails = () => {
    const totalCards = data.length;
    const con = conRef.current;
    const cardWidth = con.scrollWidth / totalCards;
    const totalConWidth = con.scrollWidth - con.clientWidth;

    return {
      cardWidth,
      totalConWidth,
    };
  };

  const scrollNow = () => {
    const el = conRef.current;
    setMove((state) => {
      el.scroll({
        left: state,
        behavior: "smooth",
      });
      return state;
    });
  };

  const handleLeftScroll = () => {
    const { cardWidth, totalConWidth } = getDetails();
    // Update Move
    if (move >= totalConWidth || move < 0) {
      setMove(0);
    } else {
      setMove((state) => state + cardWidth);
    }

    scrollNow();
  };

  const handleRightScroll = () => {
    const { cardWidth, totalConWidth } = getDetails();

    // Update Move
    if (move <= 0) {
      setMove(totalConWidth);
    } else {
      setMove((state) => state - cardWidth);
    }

    scrollNow();
  };

  // Rendering JSX
  const renderContent = (
    <div ref={conRef} className={classes["rest-container"]}>
      {data.map((rest) => (
        <ScrollRest key={rest.id} rest={rest} />
      ))}
    </div>
  );

  return (
    <Section className={classes["scroll-sec"]}>
      <h2>{heading ? heading : "Restaurants"}</h2>
      <div className={classes.left} onClick={handleLeftScroll}>
        <div className={`${classes["arrow-left"]} ${classes.arrow}`}></div>
      </div>
      {renderContent}
      <div className={classes.right} onClick={handleRightScroll}>
        <div className={`${classes["arrow-right"]} ${classes.arrow}`}></div>
      </div>
    </Section>
  );
};

export default ScrollSection;
// TRASH

// const cardWidth = cardRef.current.scrollWidth;
// const totalConWidth = totalCards * cardWidth;
// const con = conRef.current;
// const conWid = con.offsetWidth / totalCards;
