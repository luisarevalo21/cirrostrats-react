import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

const Input = () => {
  const [airports, setAirports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await axios.get(`http://127.0.0.1:8000/airports`); //replace dep_dest with above endpoints as needed

      if (!res.status === 200) {
        throw new Error("network error occured");
      }

      const { data } = res;

      const options = data.map(d => ({
        value: `${d.name} (${d.code})`,
        label: `${d.name} (${d.code})`,
        name: d.name,
        code: d.code,
        id: d.id,
      }));

      setAirports(options);
      setIsLoading(false);

      // setFlightData(res.data);
    }
    fetchData();
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleChange = e => {
    // e.preventDefault();
    setSearchValue({ ...e });
  };
  const handleSubmit = e => {
    e.preventDefault();
    //pass the seach value here, details will fetch the data from api and render it
    navigate("/details", { state: { searchValue } });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      {/* <label htmlFor="Check weather, gate and flight information"></label> */}
      {/* <input type="text" className="home__input" onChange={handleChange} /> */}
      <Select
        onChange={handleChange}
        value={searchValue}
        options={airports}
        className="home__input"
        isSearchable={true}
        isClearable={true}
        isLoading={isLoading}
      />
      <button className="home__search"> Search</button>
    </form>
  );
};

export default Input;
