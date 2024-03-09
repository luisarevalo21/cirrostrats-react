import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import Source from "./pages/Source";
import Details from "./pages/Details";
import UTCTime from "./components/UTCTime";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UTCTime />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/story" element={<Story />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/source" element={<Source />} />
        <Route path="/details" element={<Details />} />

        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
