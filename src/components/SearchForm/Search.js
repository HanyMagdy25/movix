import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../redux/MovieSlice";
import "./Search.css";

export const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const submitHandle = (e) => {
    e.preventDefault();
    if (search === "") return alert("invalid");
    dispatch(fetchAsyncMovies(search));
  };
  return (
    <div className="form-control">
      <form onSubmit={submitHandle}>
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-btn">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};
