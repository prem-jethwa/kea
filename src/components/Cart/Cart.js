import React from "react";
// import { cartData } from "../dummyData";
import classes from "./styles/cart.module.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { restActions } from "../store";

const getCartDetails = (cartItems) => {
  const qtn = cartItems.reduce((acc, cart) => acc + cart.qtn, 0);
  const total = cartItems.reduce(
    (acc, cart) => (acc += cart.qtn * cart.price),
    0
  );
  const renderCards = cartItems.map((cart) => (
    <CartItem key={cart.id} cart={cart} />
  ));
  return { renderCards, qtn, total };
};

const Cart = () => {
  const cartItems = useSelector((state) => state.user.cart);
  const dispatch = useDispatch();
  const { renderCards, qtn, total } = getCartDetails(cartItems);

  const clickHandler = () => {
    dispatch(restActions.clearCart());
  };

  return (
    <>
      <div className={classes["cart-con"]}>
        <h2>
          Your Cart <span>{qtn}</span>
        </h2>
        {renderCards}
        <div className={classes.total}>Grand Total : {total}</div>
        <button onClick={clickHandler} className={classes.order}>
          Order
        </button>
      </div>
    </>
  );
};

export default Cart;
