import React from "react";

const Basic = () => {
  const sum = (a, b) => a + b;
  const compare = (a, b) => a === b;
  return (
    <div>
      <center>
        <h1>Sum two numbers</h1>
        <p>{sum(1, 2)}</p>
        <p>{sum(1, 10)}</p>
        <p>{sum(99, 1)}</p>
      </center>
      <center>
        <h1>Comparison operators, strict equality</h1>
        <p>{compare(2, 3) ? "yes" : "no"}</p>
        <p>{compare(3, 3) ? "yes" : "no"}</p>
        <p>{compare(1, "1") ? "yes" : "no"}</p>
        <p>{compare("10", "10") ? "yes" : "no"}</p>
      </center>
    </div>
  );
};

export default Basic;
