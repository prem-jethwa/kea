import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

import Form from "./Form";
import PopUp from "./PopUp";

import { isValidUser } from "../helper";
import { restActions } from "../store/index";

const EditUser = () => {
  const formRef = useRef(null);
  const [isValidInputs, setIsValidInputs] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  const dispatch = useDispatch();
  const { name, email, address } = useSelector((state) => state.user);

  console.log(name, email, address);
  const onSubmitHandler = () => {
    if (!formRef) return;

    const user = isValidUser(formRef);

    if (!user) return setIsValidInputs(false);

    setIsValidInputs(true);
    setIsEdited(true);
    dispatch(restActions.setSignup(true));
    dispatch(restActions.setUserDetails(user));
    dispatch(restActions.clearLocal());
    dispatch(restActions.setLocal());
  };

  return (
    <>
      {!isValidInputs && (
        <PopUp msg="Name, Email or Address cannot be empty !" />
      )}
      {isEdited && <Redirect to="/user" />}
      <Form
        ref={formRef}
        type="edit"
        inputs={{ name, email, address }}
        onSubmitHandler={onSubmitHandler}
      />
    </>
  );
};

export default EditUser;
