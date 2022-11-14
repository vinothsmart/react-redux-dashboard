import React from "react";

const Challange1 = () => {
  // Find occurance of a String / Number in a string / array
  const findOccurance = (value, occur) => {
    let count = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === occur) {
        count++;
      }
    }
    return count;
  };
  return (
    <div>
      <h1>Insert Char</h1>
      {findOccurance("hello", "o")} <br />
      {findOccurance("12223345666666666666", "6")} <br />
      {findOccurance([1, 2, 3, 4, 5, 4, 6, 2, 1, 5], 4)} <br />
    </div>
  );
};

export default Challange1;
