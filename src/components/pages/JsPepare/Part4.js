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

  return <div>Part4</div>;
};

export default Part4;
