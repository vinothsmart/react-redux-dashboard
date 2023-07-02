import React from "react";

const APartice21 = () => {
  const string = "Welcome to this Javascript Guide!";
  const result = string.split("").reverse().join("");
  return (
    <div>
      <h1>Reverse a String</h1>
      <h2>String: {result}</h2>
    </div>
  );
};

export default APartice21;
