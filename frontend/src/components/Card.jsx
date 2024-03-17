import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Card = ({ arrow, title, routeCard, text }) => {
  const [toggleCard, setToggleCard] = useState(false);

  const handleToggleCard = () => {
    setToggleCard(prev => !prev);
  };

  if (routeCard)
    return (
      <div className="card">
        <h3 className="card__title">
          <span className="card__icon"> {arrow ? "▼" : null} </span>
          {title}

          <NavLink
            to="https://skyvector.com/?fpl=%20KEWR%20LANNA%20J48%20CSN%20FANPO%20Q40%20AEX%20DOOBI2%20KIAH"
            className="card__route__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Show on SkyVector Map
          </NavLink>
        </h3>
        <div className="card__route">
          <div className="card__route__text">{text}</div>
        </div>
      </div>
    );

  return (
    <div className="card">
      <h3 className="card__title" onClick={handleToggleCard}>
        <span className="card__icon"> {arrow ? "▼" : null} </span>
        {title}
      </h3>

      <div className={toggleCard ? null : "card__body"}>
        {/* // user the incoming depature or arrival text to change the styling  as well  */}
        <div className="card__depature__title">
          <p className="card__depature__time">05:40 EST</p>
          <h3>KEWR</h3>
          <p className="card__depature__gate">C - C70</p>
        </div>
        <div className="card__depature__subtitle">
          <h3 className="card__depature__subtitle__title">D-ATIS </h3>
          <span className="card__depature__time">34 mins ago</span>
        </div>
        <div className="card__depature__details">
          <p>
            EWR ATIS INFO P 2251Z. 14004KT 10SM FEW200 BKN250 11/M01 A3028 (THREE ZERO TWO EIGHT). ILS RWY 22L APCH IN
            USE. DEPARTING RY 22R FROM INT W 10,150 FEET TODA. GBAS OUT OF SERVICE. ATTN ALL ACFT, 5G NOTAMS IN EFFECT
            FOR EWR, CONTACT FSS FREQ. USE CAUTION FOR BIRDS AND CRANES IN THE VICINITY OF EWR. READBACK ALL RUNWAY HOLD
            SHORT INSTRUCTIONS AND ASSIGNED ALT. ...ADVS YOU HAVE INFO P.
          </p>
        </div>
        <div className="card__depature__subtitle">
          <h3 className="card__depature__subtitle__title">METAR</h3>
          <span className="card__depature__time">34 mins ago</span>
        </div>
        <div className="card__depature__details">
          <p>KEWR 082251Z 13004KT 10SM FEW200 BKN250 11/M01 A3028 RMK AO2 SLP253 T01061011</p>
        </div>
        <div className="card__depature__subtitle">
          <h3 className="card__depature__subtitle__title">TAF</h3>
          <span className="card__depature__time">166 mins ago</span>
        </div>
        <div className="card__depature__details">
          <p>
            KEWR 082039Z 0821/0924 15005KT P6SM SCT250 FM090600 11006KT P6SM BKN025 FM090800 11007KT P6SM OVC015
            FM091700 10010KT P6SM OVC015 FM092000 10010G18KT 5SM -RA SCT008 OVC012 TEMPO 0922/0924 2SM RA BR
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
