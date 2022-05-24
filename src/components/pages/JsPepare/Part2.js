import React from "react";

const Part2 = () => {
  // Some and every
  const arr = [1, 2, 3, 5, -1, 6, 3, 5, 11, 12];
  // find array has negative number or not ?
  // let hasNegative = false;
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  //   if (arr[i] < 0) {
  //     hasNegative = true;
  //     break;
  //   }
  // }

  // console.log(hasNegative);

  const hasNegative = arr.some((item) => {
    console.log(item);
    return item < 0;
  });

  console.log(hasNegative);

  const hasAllPositive = arr.every((item) => {
    console.log(item);
    return item > 0;
  });

  console.log(hasAllPositive);

  return <div>Part2</div>;
};

export default Part2;
