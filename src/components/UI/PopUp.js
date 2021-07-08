import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./styles/popup.module.css";

const PopUp = ({ msg, show }) => {
  const [isRenderMsg, setIsRenderMsg] = useState(true);

  const onClickHandler = () => {
    setIsRenderMsg(false);
  };

  // setTimeout(() => {
  //   setIsRenderMsg(false);
  // }, 5000);

  useEffect(() => {
    if (show) setIsRenderMsg(true);
  }, [show]);

  return (
    <>
      {isRenderMsg && (
        <div className={classes["pop-up"]}>
          <h2>{msg}</h2>
          <div className={classes["mdiv"]} onClick={onClickHandler}>
            <div className={classes["mdiv2"]}>
              <div className={classes["md"]}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ReactDOM.createPortal(<PopUp />, document.getElementById("popup"));
export default PopUp;
