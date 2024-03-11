import React from "react";
const Guide = () => {
  return (
    <div className="guide__container">
      <h2 className="guide__title">Check Weather, Gate And Flight Information</h2>
      <h3 className="guide__subtitle">Note: Gate Queries Are Currently Only Available for United Flights in Newark.</h3>
      <div className="guide__content">
        <h3 className="guide__content__title">Try the following Examples:</h3>

        <p className="guide__content__description">
          C71X: Lists all scheduled departures from the requested gate. You can just search for `X` in this case. Only
          applicable for Newark at the moment.
        </p>
        <p className="guide__content__description">
          492: Returns METAR, and TAF, and ground delay program, if any, at both departure and arrival airports for the
          given flight number - in this case 'UA492'.
        </p>
        <p className="guide__content__description">
          KEWR: Returns the latest D-ATIS(if available), METAR and TAF for the given airport.
        </p>
        <p className="guide__content__description">
          Empty search returns information on all gates for United flights in KEWR.
        </p>
      </div>
    </div>
  );
};

export default Guide;
