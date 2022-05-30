import React from "react";

const Part4 = () => {
  // Js coercion
  console.log(1 + "1"); //11
  console.log(!0); //true

  // other set of example for number
  console.log(Number("1")); //1
  console.log(Number("1,2")); //2
  console.log(Number([])); //3
  console.log(Number([1])); //4
  console.log(Number("a")); //5

  // other set of example for string
  console.log(String(1)); //1
  console.log(String({})); //2
  console.log(String([])); //3
  console.log(String(undefined)); //4
  console.log(String(null)); //5

  // falsy => "", 0, -0, NaN, null, undefined, false

  // other than that all are truthy values
  console.log(!0);
  console.log(!-0);
  console.log(!NaN);
  console.log(!null);

  console.log("checking");
  console.log(Boolean(false)); //1
  console.log(Boolean(0)); //2
  console.log(Boolean(-0)); //3
  console.log(Boolean([])); //4
  console.log(Boolean(NaN)); //5
  console.log(Boolean(undefined)); //6
  console.log(Boolean(null)); //7

  console.log(Boolean(1)); //8
  console.log(Boolean("abc")); //9

  console.log("values");

  return <div>Part4</div>;
};

export default Part4;
