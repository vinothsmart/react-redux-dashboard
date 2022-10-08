import React from "react";

const Arrays = () => {
  const getNthValue = (a, n) => a[n - 1];
  return (
    <>
      <center>
        <h1>Sum two numbers</h1>
        <p>{getNthValue([1, 2, 3, 4, 5], 3)}</p>
        <p>{getNthValue([10, 9, 8, 7, 6], 5)}</p>
        <p>{getNthValue([7, 2, 1, 6, 3], 1)}</p>
      </center>
      ;
    </>
  );
};

export default Arrays;
