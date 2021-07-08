import React, { useState } from "react";
import { useSelector } from "react-redux";

import classes from "./styles/notify.module.css";

const Notify = ({ msg }) => {
  const [isRenderMsg, setIsRenderMsg] = useState(true);
  const isSignup = useSelector((state) => state.isSignup);

  setTimeout(() => {
    setIsRenderMsg(false);
  }, 3000);

  return (
    <>
      {!isSignup && isRenderMsg && (
        <div className={classes.notify}>
          <p>
            {" "}
            <h3>Login to add items</h3>{" "}
          </p>
        </div>
      )}

      {isSignup && isRenderMsg && (
        <div className={classes.notify}>
          <p>
            {" "}
            <h3>{msg}</h3>{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default Notify;
