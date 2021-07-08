import React from "react";
import ReactDOM from "react-dom";

import AllSec from "./components/AllSec/AllSec";
import Header from "./components/Header/Header";
import "./components/styles/global-styles.css";
import Footer from "./components/Footer/Footer";
import RestFoods from "./components/RestFoods/RestFoods";
// import Form from "./components/UI/Form";
import Cart from "./components/Cart/Cart";
import Account from "./components/Account/Account";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Signup from "./components/Signup";
import EditUser from "./components/UI/EditUser";
import { restActions } from "./components/store";

// import Notify from "./components/UI/Notify";
// import ReactDOM from "react-dom";
const App = () => {
  const isSignup = useSelector((state) => state.isSignup);
  const dispatch = useDispatch();
  dispatch(restActions.getLocal());
  return (
    <>
      <Router>
        <Header />
        {/* <Notify msg="😊 Food Added To Cart 😊" /> */}

        <Switch>
          <Route exact path="/">
            <AllSec />
          </Route>

          <Route exact path="/rest/:id">
            <RestFoods />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/user/edit">
            <EditUser />
          </Route>

          <Route exact path="/cart">
            {isSignup ? <Cart /> : <Signup type="signup" />}
          </Route>

          <Route exact path="/user">
            {isSignup ? <Account /> : <Signup />}
          </Route>
        </Switch>
      </Router>
      {ReactDOM.createPortal(<Footer />, document.getElementById("footer"))}
    </>
  );
};

export default App;

//rafce
