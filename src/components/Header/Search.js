import React, { useRef, useState } from "react";
// import searchIcon from "../Assets/img/search.png";
import classes from "./styles/header.module.css";
import { dummyData } from "../dummyData";
import SearchResults from "./SearchResults";

function findMatches(wordToMatch, rests) {
  return rests.filter((rest) => {
    const regex = new RegExp(wordToMatch, "gi");
    return rest.name.match(regex);
  });
}
const Search = () => {
  const [results, setResults] = useState([]);

  const searchInputRef = useRef(null);
  const clearSearch = () => {
    searchInputRef.current.value = "";
    setResults([]);
  };

  const onChangeHandler = (e) => {
    const val = e.target.value;
    if (!val) return setResults([]);

    const renderResults = findMatches(val, dummyData);

    setResults(renderResults);
  };

  const renderSerRes = results.map((res) => (
    <SearchResults clearSearch={clearSearch} result={res} />
  ));

  return (
    <>
      <button>
        {/* <img className={classes["search-icon"]} src={searchIcon} /> */}
        <div className={classes["search-wrapper"]}>
          <div className={classes["search-icon"]}>
            <div className={classes["search-icon__circle"]}></div>
            <div className={classes["search-icon__rectangle"]}></div>
          </div>
        </div>
      </button>
      <div className={classes["search-con"]}>
        <input
          ref={searchInputRef}
          onChange={onChangeHandler}
          type="text"
          placeholder="Search For Restaurants.."
          className={classes["search-box"]}
        />
        <div className={classes.results}>
          {!results.length && searchInputRef?.current?.value
            ? "No resturant found!"
            : renderSerRes}
        </div>
      </div>
    </>
  );
};

export default Search;
