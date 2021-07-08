import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { formatSentence } from "../helper";
import classes from "./styles/form.module.css";

const Form = React.forwardRef(({ type, onSubmitHandler, inputs }, ref) => {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const formRef = useRef(null);
  const addressRef = useRef(null);

  useEffect(() => {
    const setInputs = ({ name, email, address }) => {
      nameRef.current.value = name;
      emailRef.current.value = email;
      addressRef.current.value = address;
    };

    if (inputs) setInputs(inputs);
  }, [inputs]);

  useImperativeHandle(
    ref,
    () => {
      return {
        form: formRef.current,
        nameInput: nameRef.current,
        emailInput: emailRef.current,
        address: addressRef.current,
      };
    },
    [emailRef, nameRef, formRef, addressRef]
  );
  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler();
      }}
      className={classes.form}
    >
      <h2>{formatSentence(type)}</h2>
      <input ref={nameRef} type="text" name="name" placeholder="Your Name" />
      <input ref={emailRef} type="text" name="email" placeholder="Your email" />
      {type !== "login" && (
        <input
          ref={addressRef}
          type="text"
          name="address"
          placeholder="Fake address"
        />
      )}
      <button type="submit" className={classes.btn}>
        {"  Enter  "}
      </button>
    </form>
  );
});

export default Form;
