import React from "react";

const APartice4 = () => {
  const Months = [
    "May",
    "Feb",
    "Feb",
    "April",
    "June",
    "May",
    "Feb",
    "July",
    "December",
  ];

  // method1
  const countOfDuplicates = Months.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  console.log(countOfDuplicates);

  // method2
  const countOfDuplicates2 = Months.reduce((obj, month) => {
    if (!obj[month]) {
      obj[month] = 0;
    }
    obj[month]++;
    return obj;
  }, {});

  console.log(countOfDuplicates2);

  // method3
  const countOfDuplicates3 = Months.reduce((obj, month) => {
    if (obj[month] === undefined) {
      obj[month] = 1;
    } else {
      obj[month]++;
    }
    return obj;
  }, {});

  console.log(countOfDuplicates3);

  return <div>APartice4</div>;
};

export default APartice4;
