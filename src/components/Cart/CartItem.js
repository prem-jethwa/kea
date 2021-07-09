import React from "react";
import { useDispatch } from "react-redux";
import classes from "./styles/cart.module.css";

import { restActions } from "../store/index";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(restActions.addItemToCart(cart));
    dispatch(restActions.clearLocal());
    dispatch(restActions.setLocal());
  };

  const removeItemHandler = () => {
    dispatch(restActions.removeItemFromCart(cart));
    dispatch(restActions.clearLocal());
    dispatch(restActions.setLocal());
  };

  return (
    <div className={classes.cart}>
      <img src={cart.foodImg} alt={cart.title} />
      <p className={classes.field}>{cart.title}</p>

      <div className={`${classes.btns} ${classes.field}`}>
        <div className={classes.more} onClick={addItemHandler}>
          more
        </div>
        <div className={classes.qtn}>{cart.qtn}</div>
        <div className={classes.less} onClick={removeItemHandler}>
          less
        </div>
      </div>

      <div className={`${""} ${classes.price}`}>Rs.{cart.price}</div>

      <div className={`${classes["item-total"]} ${""}`}>
        Total : {cart.price * cart.qtn}
      </div>
    </div>
  );
};

export default CartItem;
