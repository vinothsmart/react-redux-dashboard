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

  const sortAlphabeticArray = (a) => a.sort();

  const sortArrayofNumbersDescending = (a) => a.sort((a, b) => b - a);

  const sumOfArray = (a) => a.reduce((a, b) => a + b);

  const averageOfArray = (a) => a.reduce((a, b) => a + b) / a.length;

  const longestStringInArray = (a) =>
    a.reduce((a, b) => (a.length > b.length ? a : b));

  // return arr.reduce((a, b) => a.length <= b.length ? b : a);

  const checkAllArrayEqual = (a) => a.every((item) => item === a[0]);

  //   return new Set(arr).size === 1

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
      <center>
        <h1>Sort an array of strings alphabetically</h1>
        <p>{sortAlphabeticArray(["b", "c", "d", "a"])}</p>
        <p>{sortAlphabeticArray(["z", "c", "d", "a", "y", "a", "w"])}</p>
      </center>
      <center>
        <h1>Sort an array of numbers in descending order</h1>
        <p>{sortArrayofNumbersDescending([1, 3, 2])}</p>
        <p>{sortArrayofNumbersDescending([4, 2, 3, 1])}</p>
      </center>
      <center>
        <h1>Calculate the sum of an array of numbers</h1>
        <p>{sumOfArray([10, 100, 40])}</p>
        <p>{sumOfArray([10, 100, 1000, 1])}</p>
        <p>{sumOfArray([-50, 0, 50, 200])}</p>
      </center>
      <center>
        <h1>Return the average of an array of numbers</h1>
        <p>{averageOfArray([10, 100, 40])}</p>
        <p>{averageOfArray([10, 100, 1000])}</p>
        <p>{averageOfArray([-50, 0, 50, 200])}</p>
      </center>
      <center>
        <h1>Find the longest string in an array of strings</h1>
        <p>{longestStringInArray(["help", "me"])}</p>
        <p>{longestStringInArray(["I", "need", "candy"])}</p>
      </center>
      <center>
        <h1>Check if all array elements are equal</h1>
        <p>{checkAllArrayEqual([true, true, true, true]) ? "true" : "false"}</p>
        <p>{checkAllArrayEqual(["test", "test", "test"]) ? "true" : "false"}</p>
        <p>{checkAllArrayEqual([1, 1, 1, 2]) ? "true" : "false"}</p>
        <p>{checkAllArrayEqual(["10", 10, 10, 10]) ? "true" : "false"}</p>
      </center>
    </>
  );
};

export default Arrays;
