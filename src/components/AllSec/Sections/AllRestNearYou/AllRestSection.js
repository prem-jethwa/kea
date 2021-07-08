import React from "react";
import classes from "./styles/all-rest.module.css";
import Rest from "./Rest";
import Section from "../../../UI/Section";

const PremiumSection = ({ data, heading }) => {
  const renderContent = (
    <div className={classes["rest-container"]}>
      {data.map((rest) => (
        <Rest key={rest.id} rest={rest} />
      ))}
    </div>
  );

  return (
    <Section className={classes["pre-sec"]}>
      <h2>{heading ? heading : "Restaurants"}</h2>

      {renderContent}
    </Section>
  );
};

export default PremiumSection;
