import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h2 className="home__title">Cirrostrats </h2>

      <form action="">
        <label htmlFor="Check weather, gate and flight information"></label>
        <input type="text" className="home__input" />
        <button className="home__search"> Search</button>
      </form>

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
