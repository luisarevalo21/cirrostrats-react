import React from "react";

const DetailCard = ({ flightDetails }) => {
  //
  console.log("flightDetails", flightDetails);
  const {
    flight_number,
    arrival_gate,
    departure_gate,
    departure_ID,
    destination,
    scheduled_departure_time,
    scheduled_arrival_time,
  } = flightDetails;
  return (
    <div className="details__card">
      <h2 className="details__title">United Flight Information</h2>
      <h3 className="details__card__title">{flight_number}</h3>

      <div className="detail__body">
        <div className="detail__depature">
          <h3 className="detail__depature__title">{departure_ID}</h3>

          <div className="detail__gate">
            <p className="detail__gate__title">Gate: {departure_gate}</p>
            <h3>C - C111</h3>
          </div>
          <div className="detail__depature__time">
            <p className="detail__depature__local">Scheduled Local</p>
            <h3>05:40 EST</h3>
          </div>
          <div className="detail__depature__utc__time">
            <p className="detail__depature__utc">UTC</p>
            <h3>{scheduled_departure_time}</h3>
            {/* <h3>ETD 1040Z</h3> */}
          </div>
        </div>

        <div className="detail__arrival">
          <h3 className="detail__arrival__title ">{destination}</h3>

          <div className="detail__gate">
            <p className="detail__gate__title">Gate</p>
            <h3>{arrival_gate}</h3>
          </div>
          <div className="detail__arrival__time">
            <p className="detail__arrival__local"> Scheduled Local</p>
            <h3>08:49 CST</h3>
          </div>
          <div className="detail__arrival__utc__time">
            <p className="detail__arrival__utc">UTC</p>
            <h3>{scheduled_arrival_time}</h3>
            {/* <h3>STA 1449Z</h3> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
