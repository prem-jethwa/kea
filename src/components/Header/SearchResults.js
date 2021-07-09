import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import classes from "./styles/header.module.css";

const SearchResults = ({ result, clearSearch }) => {
  const [isSearched, setIsSearched] = useState(false);
  const [_, setIsClicked] = useState(false);
  const [id, setId] = useState(0);

  const onClickHandler = () => {
    setId(result.id);
    setIsSearched(true);
    setIsClicked(true);

    setIsClicked((state) => {
      if (state) clearSearch();
    });
  };

  return (
    <>
      {isSearched && <Redirect to={`/rest/${id}`} />}
      <div className={classes.result} onClick={onClickHandler}>
        <img src={result.restImg} alt={_} />
        <div>
          <p>{result.name}</p>
          <p className={classes["res-loc"]}>{result.location}</p>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
