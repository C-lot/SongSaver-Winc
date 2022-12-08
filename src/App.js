import React from "react";
import "./App.css";
import Header from "./Container/Header";
import Songs from "./SongOverview";
import Nav from "./Container/Nav";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/SongOverview" element={<Songs />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

