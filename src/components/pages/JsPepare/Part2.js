import React from "react";

const Part2 = () => {
  const arr = [1, 2, 3, 5, -1, 6, 3, 5, 11, 12];
  let hasNegative = false;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] < 0) {
      hasNegative = true;
    }
  }

  console.log(hasNegative);

  return <div>Part2</div>;
};

export default Part2;
