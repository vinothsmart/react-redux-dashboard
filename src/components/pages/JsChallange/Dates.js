import React from "react";

const Dates = () => {
  const checkBothDatesEqual = (a, b) => {
    return a.getTime() === b.getTime() ? "true" : "false";
  };
  return (
    <center>
      <h1>Check if two dates are equal</h1>
      <p>
        {checkBothDatesEqual(
          new Date("2000/01/01 08:00:00"),
          new Date("2000/01/01 08:45:00")
        )}
      </p>
      <p>
        {checkBothDatesEqual(
          new Date("2000/01/01 08:00:00"),
          new Date("2000/01/01 08:00:00")
        )}
      </p>
      <p>
        {checkBothDatesEqual(
          new Date("2001/01/01 08:00:00"),
          new Date("2000/01/01 08:00:00")
        )}
      </p>
    </center>
  );
};

export default Dates;
