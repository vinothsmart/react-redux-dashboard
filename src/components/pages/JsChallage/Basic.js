import React from "react";

const Basic = () => {
  const sum = (a, b) => a + b;
  return (
    <div>
      <center>
        <h1>Sum two numbers</h1>
        <p>{sum(1, 2)}</p>
        <p>{sum(1, 10)}</p>
        <p>{sum(99, 1)}</p>
      </center>
    </div>
  );
};

export default Basic;
