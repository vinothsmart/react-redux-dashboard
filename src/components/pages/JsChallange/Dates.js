import React from "react";

const Dates = () => {
  const checkBothDatesEqual = (a, b) => {
    return a.getTime() === b.getTime() ? "true" : "false";
  };

  // Return the number of days between two dates
  const numberOfDays = (a, b) => {
    return Math.round(Math.abs((a - b) / (1000 * 60 * 60 * 24)));
  };

  // another way
  // function numberOfDays(a, b) {
  //   const dif = Math.abs(a - b);
  //   return dif / 1000 / 60 / 60 / 24;
  // }

  return (
    <>
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
      <center>
        <h1>Return the number of days between two dates</h1>
        <p>{numberOfDays(new Date("2020-06-11"), new Date("2020-06-01"))}</p>
        <p>{numberOfDays(new Date("2000-01-01"), new Date("2020-06-01"))}</p>
      </center>
    </>
  );
};

export default Dates;
