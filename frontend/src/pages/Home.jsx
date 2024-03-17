import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Input from "../components/Input";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://127.0.0.1:8000/");
      console.log("res", res);

      if (!res.status === 200) {
        console.log("Error");
        throw new Error("network error occured");
      }

      setData(res.data);
    }
    fetchData();
  }, []);

  return (
    <div className="home">
      <h2 className="home__title">Cirrostrats </h2>

      <div className="data">
        <h1>DATA FETCHED</h1>
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong>
              {typeof value === 'object' && value !== null ? (
              <pre>{JSON.stringify(value, null, 2)}</pre>): <span>{String(value)}</span>}
            </li>
          ))}
        </ul>
      </div>

      <Input />

      <NavLink to="/guide" className="home__link">
        Guide
      </NavLink>
      <NavLink to="https://cirrostrats.us/live_map" className="home__link">
        Live Map
      </NavLink>

      <div className="home__content">
        <p>
          !! Scheduled Tests Coming Up! Please save and access the main webapp through:
          <span className="home__link"> cirrostrats.us.</span> Also, please save my number and feel free to reach out
          for troubleshooting and general questions.
          <span className="home__number"> +1 201-509-9485</span> - Ujas (UJ)
        </p>
      </div>
    </div>
  );
};

export default Home;
