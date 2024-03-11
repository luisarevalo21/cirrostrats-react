import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleChange = e => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(searchValue);
    //pass the seach value here, details will fetch the data from api and render it
    navigate("/details");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="Check weather, gate and flight information"></label>
      <input type="text" className="home__input" onChange={handleChange} />
      <button className="home__search"> Search</button>
    </form>
  );
};

export default Input;
