import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import Form from "../components/UI/Form";
import { isValidUser } from "./helper";
import { restActions } from "./store";
import PopUp from "./UI/PopUp";

const Signup = () => {
  const formRef = useRef(null);
  const [isValidInputs, setIsValidInputs] = useState(false);
  const dispatch = useDispatch();
  const isSignup = useSelector((state) => state.isSignup);

  const onSubmitHandler = () => {
    if (!formRef) return;

    const user = isValidUser(formRef);

    if (!user) return setIsValidInputs(false);

    setIsValidInputs(true);
    dispatch(restActions.setSignup(true));
    dispatch(restActions.setUserDetails(user));
    dispatch(restActions.clearLocal());
    dispatch(restActions.setLocal());
  };

  return (
    <>
      {!isValidInputs && (
        <PopUp msg="Name, Email or Address cannot be Empty !" show="true" />
      )}
      {isSignup ? (
        <Redirect to="/" />
      ) : (
        <Form ref={formRef} onSubmitHandler={onSubmitHandler} type="signup" />
      )}
      ;
    </>
  );
};

export default Signup;

// TRASH
// if (!formRef) return;
// const { nameInput, emailInput, address } = formRef.current;
// const nameVal = nameInput.value;
// const emailVal = emailInput.value;
// const addressVal = address.value;

// if (!nameVal || !emailVal || !addressVal) return setIsValidInputs(false);

// const user = { name: nameVal, email: emailVal, address: addressVal };

// setIsValidInputs(true);
// dispatch(restActions.setSignup(true));
// dispatch(restActions.setUserDetails(user));
