import React from "react";
import classes from "./styles/rest-foods.module.css";
import Stars from "../UI/Stars";

const Rest = ({ rest }) => {
  return (
    <div className={classes.rest}>
      <img src={rest.restImg} />
      <div className={classes["name-loc"]}>
        <h2>{rest.name}</h2>
        <p className={classes.loc}>{rest.location}</p>
        <p className={classes.stars}>
          <Stars val={rest.stars} />
        </p>
      </div>
    </div>
  );
};

export default Rest;
