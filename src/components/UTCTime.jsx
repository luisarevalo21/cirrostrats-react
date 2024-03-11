import React, { useEffect, useState } from "react";

const UTCTime = () => {
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const updateFormattedDate = () => {
      const date = new Date();
      const day = String(date.getUTCDate()).padStart(2, "0");
      const hour = String(date.getUTCHours()).padStart(2, "0");
      const minute = String(date.getUTCMinutes()).padStart(2, "0");

      const currentDate = `UTC: ${day} ${hour}:${minute}Z`;
      setCurrentDate(currentDate);
    };
    updateFormattedDate();

    const intervalId = setInterval(updateFormattedDate, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="utc__container">
      <span>{currentDate} </span>
    </div>
  );
};

export default UTCTime;
