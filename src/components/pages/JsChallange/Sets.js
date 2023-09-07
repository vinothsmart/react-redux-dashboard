import React from "react";

const Sets = () => {
  const checkValuePresent = (set, val) => {
    return set.has(val);
  };

  //   const convertSetToArray = (set) => {
  //     return [...set];
  //   };

  //   console.log(convertSetToArray(new Set([1, 2, 3])));
  //   console.log(convertSetToArray(new Set([123])));
  //   console.log(convertSetToArray(new Set(["1", "2", "3"])));
  //   console.log(convertSetToArray(new Set("123")));

  //   const getUnionSet = (a, b) => {
  //     return new Set([...a, ...b]);
  //   };

  // another way
  //   const getUnionSet = (a, b) => {
  //     const result = new Set(a);
  //     b.forEach((el) => result.add(el));
  //     return result;
  //   };

  //   console.log(getUnionSet(new Set("123"), new Set("234")));
  //   console.log(getUnionSet(new Set([1, 2, 3]), new Set([3, 4, 5])));
  //   console.log(
  //     getUnionSet(new Set([false, false, NaN]), new Set([true, true, NaN]))
  //   );

  //   const createSet = (a, b, c) => {
  //     return new Set([a, b, c]);
  //   };

  // another way
  const createSet = (a, b, c) => {
    const set = new Set();
    set.add(a);
    set.add(b);
    set.add(c);
    return set;
  };

  console.log(createSet(1, "b", 3));
  console.log(createSet(NaN, null, false));
  console.log(createSet("a", ["b"], { c: 3 }));

  return (
    <>
      <center>
        <h1>Check if value is present in Set</h1>
        <p>{checkValuePresent(new Set([1, 2, 3]), 2) ? "true" : "false"}</p>
        <p>{checkValuePresent(new Set([123]), 2) ? "true" : "false"}</p>
        <p>
          {checkValuePresent(new Set(["1", "2", "3"]), "2") ? "true" : "false"}
        </p>
        <p>{checkValuePresent(new Set("123"), "2") ? "true" : "false"}</p>
      </center>
      <center>
        <h1>Convert a Set to Array</h1>
      </center>
      <center>
        <h1>Get union of two sets</h1>
      </center>
      <center>
        <h1>Creating Javascript Sets</h1>
      </center>
    </>
  );
};

export default Sets;
