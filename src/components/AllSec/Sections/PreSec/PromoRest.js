import React from "react";
import Card from "../../../UI/Card";
import classes from "./styles/pre-sec.module.css";

const PromoRest = ({ promo }) => {
  return (
    <Card>
      <div className={classes.rest}>
        <h3>{promo.title && promo.title}</h3>
        <img src={promo.promoImg} alt="Restaurant Img" />
      </div>
    </Card>
  );
};

export default PromoRest;
