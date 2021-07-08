import classes from "./styles/rest-foods.module.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import { restActions } from "../store";
import Notify from "../UI/Notify";
import ReactDOM from "react-dom";
import { formatSentence } from "../helper";

const Food = ({ food }) => {
  const [notity, setNotity] = useState(false);
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(restActions.addItemToCart(food));
    setNotity(true);
  };

  return (
    <>
      {notity &&
        ReactDOM.createPortal(
          <Notify msg="😋Food Added To Cart" />,
          document.getElementById("notify")
        )}
      <Card>
        <div className={classes.food}>
          <img src={food.foodImg} />
          <p className={classes.title}>{formatSentence(food.title)}</p>
          <div className={classes["price-add"]}>
            <p className={classes.price}>Rs.{food.price}</p>
            <div onClick={addItemHandler}>ADD</div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Food;
