import React from "react";
import classes from "./styles/all-rest.module.css";
import Card from "../../../UI/Card";
import { Link } from "react-router-dom";
import Stars from "../../../UI/Stars";
const Rest = ({ rest }) => {
  return (
    <Card>
      <Link to={`/rest/${rest.id}`} className={classes.rest}>
        <h3>{rest.name}</h3>
        <img src={rest.restImg} alt="Restaurant Img" />
        <p>
          <Stars key={`all${rest.id}`} val={rest.stars} />
        </p>
      </Link>
    </Card>
  );
};

export default Rest;
