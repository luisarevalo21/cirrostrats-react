import React from "react";

import { NavLink } from "react-router-dom";

const Source = () => {
  return (
    <div className="source">
      <h2 className="source__title">Source for all the data</h2>

      <div className="links">
        <div className="source__link">
          <NavLink to="https://www.aviationweather.gov" target="_blank" rel="noopener noreferrer">
            https://www.aviationweather.gov
          </NavLink>
        </div>

        <div className="source__link">
          <NavLink to="https://www.flightview.com" target="_blank" className="source__link" rel="noopener noreferrer">
            https://www.flightview.com
          </NavLink>
        </div>

        <div className="source__link">
          <NavLink to="https://www.airport-ewr.com" target="_blank" rel="noopener noreferrer">
            https://www.airport-ewr.com
          </NavLink>
        </div>

        <div className="source__link">
          <NavLink to="  https://www.flightstats.com" target="_blank" rel="noopener noreferrer">
            https://www.flightstats.com
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Source;
