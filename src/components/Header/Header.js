import React from "react";
// import accIcon from "../Assets/img/account.png";
import classes from "./styles/header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "./Search";

const Header = () => {
  const isSignup = useSelector((state) => state.isSignup);
  const cartItems = useSelector((state) => state.user.cart);
  const address = useSelector((state) => state.user.address);

  const qtn = cartItems.reduce((acc, cart) => acc + cart.qtn, 0);

  return (
    <header className={classes.header}>
      <div className={classes["header-con"]}>
        <Link to="/" className={classes.logo}>
          PJ
        </Link>

        <div className={classes["loc-search"]}>
          <h4 className={classes["loc"]}>
            {address || " [location of the user....]"}
          </h4>
          <Search />
        </div>

        <Link to="/cart" className={classes.cart}>
          CART <span> {qtn}</span>
        </Link>

        {isSignup ? (
          <Link to="/user">
            {" "}
            {/* <img src={accIcon} className={classes.acc} />{" "} */}
            <div className={classes["acc"]}>
              <div className={classes["acc-icon"]}>
                <div className={classes["acc-icon__circle1"]}></div>
                <div className={classes["acc-icon__circle2"]}></div>
              </div>
            </div>
          </Link>
        ) : (
          <Link to="/signup">
            <h3> SIGN UP </h3>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
