import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import DetailCard from "../components/Cards/DetailCard";

const Details = () => {
  const [flightData, setFlightData] = useState([]);
  const location = useLocation();
  const searchValue = location?.state?.searchValue;
  useEffect(() => {
    async function fetchData() {
      const airportId = searchValue.id;
      console.log("airpoidId", searchValue);
      const res = await axios.get(`http://127.0.0.1:8000/airports/${airportId}`); //replace dep_dest with above endpoints as needed

      if (!res.status === 200) {
        throw new Error("network error occured");
      }

      setFlightData(res.data);
    }
    if (searchValue) fetchData();
  }, [searchValue]);

  return (
    <div className="details">
      {/* <h2 className="details__title">United Flight Information</h2> */}

      {/* <div className="detail">
        <h3>▼ {title}</h3>
      </div> */}
      {/* 
      <div className="details__card">
        <h3 className="details__card__title">UA492 N37502</h3>

        <div className="detail__body">
          <div className="detail__depature">
            <h3 className="detail__depature__title">KEWR</h3>

            <div className="detail__gate">
              <p className="detail__gate__title">Gate</p>
              <h3>C - C111</h3>
            </div>
            <div className="detail__depature__time">
              <p className="detail__depature__local">Scheduled Local</p>
              <h3>05:40 EST</h3>
            </div>
            <div className="detail__depature__utc__time">
              <p className="detail__depature__utc">UTC</p>
              <h3>STD 1040Z</h3>
              <h3>ETD 1040Z</h3>
            </div>
          </div>

          <div className="detail__arrival">
            <h3 className="detail__arrival__title ">KIAH</h3>

            <div className="detail__gate">
              <p className="detail__gate__title">Gate</p>
              <h3>C - C39</h3>
            </div>
            <div className="detail__arrival__time">
              <p className="detail__arrival__local"> Scheduled Local</p>
              <h3>08:49 CST</h3>
            </div>
            <div className="detail__arrival__utc__time">
              <p className="detail__arrival__utc">UTC</p>
              <h3>STA 1449Z</h3>
              <h3>STA 1449Z</h3>
            </div>
          </div>
        </div>
      </div> */}

      {/* <Card arrow={false} detailCard={true} flightDetail={flightData} /> */}
      {flightData && <DetailCard flightDetails={flightData} />}
      <Card arrow={true} title="depature" flightDetails={flightData} />
      <Card
        routeCard={true}
        title="Route"
        text="(FL360) LANNA J48 CSN FANPO Q40 AEX DOOBI2"
        link="https://skyvector.com/?fpl=%20KEWR%20LANNA%20J48%20CSN%20FANPO%20Q40%20AEX%20DOOBI2%20KIAH"
      />
      <Card arrow={true} title="arrival" />
    </div>
  );
};

export default Details;
