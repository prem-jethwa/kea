import classes from "./acc.module.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditUser from "../UI/EditUser";
import { Redirect } from "react-router";

// const user = {
//   name: "Prem",
//   email: "prem@j.com",
//   address: "Malwani Malad WEST",
// };

const Account = () => {
  const user = useSelector((state) => state.user);

  const [isEdit, setIsEdit] = useState(false);

  const onClickHandler = () => {
    setIsEdit(true);
  };

  return (
    <>
      {isEdit && <Redirect to="/user/edit" />}
      <div className={classes.acc}>
        <h2>{user.name}</h2>
        <p>Email : {user.email}</p>
        <p>Address : {user.address}</p>
        <button onClick={onClickHandler}>Edit</button>
      </div>
    </>
  );
};

export default Account;
