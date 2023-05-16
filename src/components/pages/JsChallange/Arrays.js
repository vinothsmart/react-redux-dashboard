import React from "react";

const Arrays = () => {
  const getNthValue = (a, n) => a[n - 1];

  const removeFirstThreeValuesInArray = (a) => a.slice(3);

  const getLastThreeValuesInArray = (a) => a.slice(-3);

  const getFirstThreeValuesInArray = (a) => a.slice(0, 3);

  const getLastnthValuesInArray = (a, n) => a.slice(-n);
  // Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.
  const removeValuesInArray = (a, b) => a.filter((item) => item !== b);

  const countElementsInArray = (a) => a.length;

  const countNegativeElementsInArray = (a) =>
    a.filter((item) => item < 0).length;

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
      <center>
        <h1>last n Values</h1>
        <p>{getLastThreeValuesInArray([1, 2, 3, 4])}</p>
        <p>{getLastThreeValuesInArray([5, 4, 3, 2, 1, 0])}</p>
        <p>{getLastThreeValuesInArray([99, 1, 1])}</p>
      </center>
      <center>
        <h1>fist n Values</h1>
        <p>{getFirstThreeValuesInArray([1, 2, 3, 4])}</p>
        <p>{getFirstThreeValuesInArray([5, 4, 3, 2, 1, 0])}</p>
        <p>{getFirstThreeValuesInArray([99, 1, 1])}</p>
      </center>
      <center>
        <h1>last nth Values</h1>
        <p>{getLastnthValuesInArray([1, 2, 3, 4, 5], 2)}</p>
        <p>{getLastnthValuesInArray([1, 2, 3], 6)}</p>
        <p>{getLastnthValuesInArray([1, 2, 3, 4, 5, 6, 7, 8], 3)}</p>
      </center>
      <center>
        <h1>Remove a specific array element</h1>
        <p>{removeValuesInArray([1, 2, 3], 2)}</p>
        <p>{removeValuesInArray([1, 2, "2"], "2")}</p>
        <p>{removeValuesInArray([false, "2", 1], false)}</p>
        <p>{removeValuesInArray([1, 2, "2 ", 1], 1)}</p>
      </center>
      <center>
        <h1>CountElementsInArray</h1>
        <p>{countElementsInArray([1, 2, 3], 2)}</p>
        <p>{countElementsInArray([1, 2, "2"], "2")}</p>
        <p>{countElementsInArray([false, "2", 1], false)}</p>
        <p>{countElementsInArray([1, 2, "2 ", 1], 1)}</p>
      </center>
      <center>
        <h1>CountNegativeInArray</h1>
        <p>{countNegativeElementsInArray([1, -2, 2, -4])}</p>
        <p>{countNegativeElementsInArray([0, 9, 1])}</p>
        <p>{countNegativeElementsInArray([4, -3, 2, 1, 0])}</p>
      </center>
    </>
  );
};

export default Arrays;
