import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import WatchList from "./components/WatchList/WatchList";
import Trending from "./components/Trending/Trending";
// import { Search } from "./components/SearchForm/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Search/> */}
        {/* <HomePage/> */} 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
