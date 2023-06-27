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

  const daysUpper = days.map(firstLetterUpper);
  console.log(daysUpper);

  return <div>APartice14</div>;
};

export default APartice14;
