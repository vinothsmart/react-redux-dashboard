import React from "react";

const Basic = () => {
  const sum = (a, b) => a + b;
  const compare = (a, b) => a === b;
  const getType = (a) => typeof a;
  const nthChar = (a, n) => a[n - 1];
  const removeFirstThree = (a) => a.slice(3);
  const removeLastThree = (a) => a.slice(-3);
  const getFirstThree = (a) => a.slice(0, 3);
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
      <center>
        <h1>Get type of value</h1>
        <p>{getType(1)}</p>
        <p>{getType(false)}</p>
        <p>{getType({})}</p>
        <p>{getType(null)}</p>
        <p>{getType("string")}</p>
        <p>{getType(["array"])}</p>
      </center>
      <center>
        <h1>Get nth character of string</h1>
        <p>{nthChar("abcd", 1)}</p>
        <p>{nthChar("zyxbwpl", 5)}</p>
        <p>{nthChar("gfedcba", 3)}</p>
      </center>
      <center>
        <h1>Remove first n characters of string</h1>
        <p>{removeFirstThree("abcdefg")}</p>
        <p>{removeFirstThree("1234")}</p>
        <p>{removeFirstThree("fgedcba")}</p>
      </center>
      <center>
        <h1>Get last n characters of string</h1>
        <p>{removeLastThree("abcdefg")}</p>
        <p>{removeLastThree("1234")}</p>
        <p>{removeLastThree("fgedcba")}</p>
      </center>
    </div>
  );
};

export default Basic;
