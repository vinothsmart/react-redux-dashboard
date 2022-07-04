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

  const percentOf = (a, b) => (b / 100) * a;

  const basicMath = (a, b, c, d, e, f) => (((a + b - c) * d) / e) ** f;

  const checkEven = (a) => a % 2 === 0;

  const checkChar = (a, b) => b.split(a).length - 1;

  // const checkWholeNumber = (a) => a % 1 === 0;
  const checkWholeNumber = (a) => a - Math.floor(a) === 0;

  const multipleDivision = (a, b) => (a < b ? a / b : a * b);

  // const checkStringContains = (a, b) => (a.includes(b) ? b + a : a + b);
  const checkStringContains = (a, b) => (a.indexOf(b) === -1 ? a + b : b + a);

  // const roundNumberToTwoDigits = (a) => Math.round(a * 100) / 100;
  const roundNumberToTwoDigits = (a) => Number(a.toFixed(2));

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
      <center>
        <h1>Check if a number is a whole number</h1>
        <p>{checkWholeNumber(4) ? "true" : "false"}</p>
        <p>{checkWholeNumber(1.123) ? "true" : "false"}</p>
        <p>{checkWholeNumber(1048) ? "true" : "false"}</p>
        <p>{checkWholeNumber(10.48) ? "true" : "false"}</p>
      </center>
      <center>
        <h1>Multiplication, division, and comparison operators</h1>
        <p>{multipleDivision(10, 100)}</p>
        <p>{multipleDivision(90, 45)}</p>
        <p>{multipleDivision(8, 20)}</p>
        <p>{multipleDivision(2, 0.5)}</p>
      </center>
      <center>
        <h1>Check whether a string contains another string and concatenate</h1>
        <p>{checkStringContains("cheese", "cake")}</p>
        <p>{checkStringContains("lips", "s")}</p>
        <p>{checkStringContains("Java", "script")}</p>
        <p>{checkStringContains(" think, therefore I am", "I")}</p>
      </center>
      <center>
        <h1>Round a number to 2 decimal places</h1>
        <p>{roundNumberToTwoDigits(2.12397)}</p>
        <p>{roundNumberToTwoDigits(3.136)}</p>
        <p>{roundNumberToTwoDigits(1.12397)}</p>
        <p>{roundNumberToTwoDigits(26.1379)}</p>
      </center>
    </div>
  );
};

export default Basic;
