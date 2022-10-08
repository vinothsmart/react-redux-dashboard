import React from "react";

const Arrays = () => {
  const getNthValue = (a, n) => a[n - 1];

  const removeFirstThreeValuesInArray = (a) => a.slice(3);

  return (
    <>
      <center>
        <h1>Get nth element of array</h1>
        <p>{getNthValue([1, 2, 3, 4, 5], 3)}</p>
        <p>{getNthValue([10, 9, 8, 7, 6], 5)}</p>
        <p>{getNthValue([7, 2, 1, 6, 3], 1)}</p>
      </center>
      <center>
        <h1>Remove first n elements of an array</h1>
        <p>{removeFirstThreeValuesInArray([1, 2, 3, 4])}</p>
        <p>{removeFirstThreeValuesInArray([5, 4, 3, 2, 1, 0])}</p>
        <p>{removeFirstThreeValuesInArray([99, 1, 1])}</p>
      </center>
    </>
  );
};

export default Arrays;
