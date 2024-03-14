import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Routes, Route, useFetcher } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import Source from "./pages/Source";
import Details from "./pages/Details";
import UTCTime from "./components/UTCTime";
import Table from "./components/Table";
import "./App.css";

function App() {
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://127.0.0.1:8000/api/flights/");
      console.log("res", res);
      if (!res.status === 200) {
        console.log("Error");
        throw new Error("network error occured");
      }

      const data = res.data;
      console.log("data", data);
    }
    fetchData();
  }, []);

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
        <Route path="/table" element={<Table />} />

        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
