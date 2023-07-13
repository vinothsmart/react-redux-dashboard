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

  // Check if two dates fall on the exact same day
  const checkBothDateEqual = (a, b) => {
    return a.toDateString() === b.toDateString() ? "true" : "false";
  };

  // another way
  // function checkBothDateEqual(a, b) {
  //   return (
  //     a.getFullYear() === b.getFullYear() &&
  //     a.getMonth() === b.getMonth() &&
  //     a.getDate() === b.getDate()
  //   );
  // }

  // Check if two dates are within 1 hour from each other
  const checkBothDatesWithinOneHour = (a, b) => {
    return Math.abs(a - b) / 36e5 <= 1 ? "true" : "false";
  };

  // another way
  function checkBothDatesWithinOneHour2(a, b) {
    return Math.abs(a - b) / 1000 / 60 <= 6;
  }

  // Check if one date is earlier than another
  const checkOneDateIsEarlier = (a, b) => {
    return a < b ? "true" : "false";
  };

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
      <center>
        <h1>Check if two dates fall on the exact same day</h1>
        <p>
          {checkBothDateEqual(new Date("2000/01/01"), new Date("2000/01/01"))}
        </p>
        <p>
          {checkBothDateEqual(new Date("2000/01/01"), new Date("2000/01/02"))}
        </p>
        <p>
          {checkBothDateEqual(new Date("2001/01/01"), new Date("2000/01/01"))}
        </p>
        <p>
          {checkBothDateEqual(new Date("2000/11/01"), new Date("2000/01/01"))}
        </p>
      </center>
      <center>
        <h1>Check if two dates are within 1 hour from each other</h1>
        <p>
          {checkBothDatesWithinOneHour(
            new Date("2000/01/01 08:00:00"),
            new Date("2000/01/01 08:45:00")
          )}
        </p>
        <p>
          {checkBothDatesWithinOneHour(
            new Date("2000/01/01 08:00:00"),
            new Date("2000/01/01 09:00:00")
          )}
        </p>
        <p>
          {checkBothDatesWithinOneHour(
            new Date("2000/01/01 08:00:00"),
            new Date("2000/01/01 09:15:00")
          )}
        </p>
        <p>
          {checkBothDatesWithinOneHour(
            new Date("2000/01/01 08:00:00"),
            new Date("2000/01/01 09:59:00")
          )}
        </p>
        <p>
          {checkBothDatesWithinOneHour(
            new Date("2000/01/01 08:00:00"),
            new Date("2000/01/01 10:00:00")
          )}
        </p>
      </center>
      <center>
        <h1>Check if one date is earlier than another</h1>
        <p>
          {checkOneDateIsEarlier(
            new Date("2000/01/01 08:00:00"),
            new Date("2000/01/01 08:45:00")
          )}
        </p>
        <p>
          {checkOneDateIsEarlier(
            new Date("2000/01/01 08:00:00"),
            new Date("2000/01/01 08:00:00")
          )}
        </p>
        <p>
          {checkOneDateIsEarlier(
            new Date("2001/01/01 08:00:00"),
            new Date("2000/01/01 08:00:00")
          )}
        </p>
      </center>
    </>
  );
};

export default Dates;
