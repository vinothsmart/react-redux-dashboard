import React from "react";

const APartice14 = () => {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const firstLetterUpper = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const daysUpper = days.map((day) => firstLetterUpper(day));
  console.log(daysUpper);

  // another way
  const daysUpper2 = days.map(
    (day) => day.charAt(0).toUpperCase() + day.substring(1)
  );
  console.log(daysUpper2);

  return <div>APartice14</div>;
};

export default APartice14;
