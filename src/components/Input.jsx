import React from "react";
import { useState } from "react";

const Input = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = e => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
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
