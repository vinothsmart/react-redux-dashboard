import React from "react";

const Basic = () => {
  const sum = (a, b) => a + b;
  const compare = (a, b) => a === b;
  const getType = (a) => typeof a;
  const nthChar = (a, n) => a[n - 1];
  const removeFirstThree = (a) => a.slice(3);
  const removeLastThree = (a) => a.slice(-3);
  const getFirstThree = (a) => a.slice(0, 3);
  const getFirstHalf = (a) => a.slice(0, a.length / 2);
  const removeLastThreeChars = (a) => a.slice(0, -3);
  const percentOf = (a, b) => a * (b / 100);
  const basicMath = (a, b, c, d, e, f) => {
    const sum = a + b;
    const sub = sum - c;
    const mult = sub * d;
    const divide = mult / e;
    const powerOf = divide ** f;
    return powerOf;
  };
  const checkEven = (a) => a % 2 === 0;

  const checkChar = (a, b) => b.split(a).length - 1;

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
        <p>{compare(2, 3) ? "true" : "false"}</p>
        <p>{compare(3, 3) ? "true" : "false"}</p>
        <p>{compare(1, "1") ? "true" : "false"}</p>
        <p>{compare("10", "10") ? "true" : "false"}</p>
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
      <center>
        <h1>Get first n characters of string</h1>
        <p>{getFirstThree("abcdefg")}</p>
        <p>{getFirstThree("1234")}</p>
        <p>{getFirstThree("fgedcba")}</p>
      </center>
      <center>
        <h1>Extract first half of string</h1>
        <p>{getFirstHalf("abcdefg")}</p>
        <p>{getFirstHalf("1234")}</p>
        <p>{getFirstHalf("fgedcba")}</p>
      </center>
      <center>
        <h1>Remove last n characters of string</h1>
        <p>{removeLastThreeChars("abcdefg")}</p>
        <p>{removeLastThreeChars("1234")}</p>
        <p>{removeLastThreeChars("fgedcba")}</p>
      </center>
      <center>
        <h1>Return the percentage of a number</h1>
        <p>{percentOf(100, 50)}</p>
        <p>{percentOf(10, 1)}</p>
        <p>{percentOf(500, 25)}</p>
      </center>
      <center>
        <h1>Basic JavaScript math operators</h1>
        <p>{basicMath(6, 5, 4, 3, 2, 1)}</p>
        <p>{basicMath(6, 2, 1, 4, 2, 3)}</p>
        <p>{basicMath(2, 3, 6, 4, 2, 3)}</p>
      </center>
      <center>
        <h1>Check if a number is even</h1>
        <p>{checkEven(10) ? "true" : "false"}</p>
        <p>{checkEven(-4) ? "true" : "false"}</p>
        <p>{checkEven(5) ? "true" : "false"}</p>
        <p>{checkEven(-111) ? "true" : "false"}</p>
      </center>
      <center>
        <h1>How many times does a character occur?</h1>
        <p>
          {checkChar(
            "m",
            "how many times does the character occur in this sentence?"
          )}
        </p>
        <p>
          {checkChar(
            "h",
            "how many times does the character occur in this sentence?"
          )}
        </p>
        <p>
          {checkChar(
            "?",
            "how many times does the character occur in this sentence?"
          )}
        </p>
        <p>
          {checkChar(
            "z",
            "how many times does the character occur in this sentence?"
          )}
        </p>
      </center>
    </div>
  );
};

export default Basic;
