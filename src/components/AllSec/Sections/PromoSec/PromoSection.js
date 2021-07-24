import React from "react";
import classes from "./styles/pre-sec.module.css";
import PromoRest from "./PromoRest";
import { dummyPromo } from "../../../dummyData";
import Section from "../../../UI/Section";

const PromoSection = ({ heading }) => {
  const renderContent = (
    <div className={classes["rest-container"]}>
      {dummyPromo.map((promo) => (
        <PromoRest key={promo.id} promo={promo} />
      ))}
    </div>
  );

  return (
    <Section className={classes["pre-sec"]}>
      <h2>{heading ? heading : "Restaurants"}</h2>
      <div className={classes.left}>
        <div className={`${classes["arrow-left"]} ${classes.arrow}`}></div>
      </div>
      {renderContent}
      <div className={classes.right}>
        <div className={`${classes["arrow-right"]} ${classes.arrow}`}></div>
      </div>
    </Section>
  );
};

export default PromoSection;
