import React from "react";

const APartice22 = () => {
  // normal function
  // function getData() {
  //   console.log("Hi, I am getData function");
  // }
  // // only called we declare it
  // getData();

  function getData() {
    console.log("Hi, I am from regular getData function");
  }
  // IIFEs
  // Functions Expression -> they will get called immediately
  (function getData() {
    console.log("Hi, I am from IIFE getData function");
  })();

  return (
    <div>
      <h1> IIFE</h1>
    </div>
  );
};

export default APartice22;
