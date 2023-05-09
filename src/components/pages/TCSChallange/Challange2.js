import React from "react";

const Challange2 = () => {
  console.log(1 < 2 < 3); // true  ----> correct answer ----> true
  console.log(3 > 2 > 1); // false ----> correct answer ----> true
  console.log(10 == [10]); // flase ----> correct answer ----> true
  console.log(10 == [[[[[[[10]]]]]]]); // false ----> correct answer ----> true
  console.log(0.1 + 0.2); // 0.10.2 ----> correct answer ----> 0.30000000000000004
  console.log(0.1 + 0.2 == 0.3); // false ----> correct answer ----> false
  console.log(10 + "10"); //20 ----> correct answer ----> 1010
  console.log(10 - "10"); //0 ----> correct answer ----> 0
  console.log([1, 2] + [3, 4]); // [1, 2, 3, 4]; ----> correct answer ----> 1,23,4
  console.log(NaN === NaN); //true ----> correct answer ----> false
  return (
    <div>
      <h1>Challange2</h1>
    </div>
  );
};

export default Challange2;
