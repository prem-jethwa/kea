import classes from "./styles/rest-foods.module.css";
import React, { useRef } from "react";
import { dummyData } from "../dummyData";
import Food from "./Food";
import Rest from "./Rest";
import { useParams } from "react-router";

const RestFoods = () => {
  const { id } = useParams();
  const ref = useRef();

  setTimeout(() => ref.current.scrollIntoView(), 200);
  const rest = dummyData.find((rest) => rest.id === +id);

  return (
    <>
      <main ref={ref} className={classes.main}>
        <Rest rest={rest} />
        <div className={classes["foods-con"]}>
          {rest.foods.map((food) => (
            <Food key={food.id + 1} food={food} />
          ))}
        </div>
      </main>
    </>
  );
};

export default RestFoods;
