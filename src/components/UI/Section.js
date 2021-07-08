import React from "react";
import classes from "./styles/section.module.css";

const Section = (props) => {
  return (
    <section
      className={`${classes.section} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};

export default Section;
