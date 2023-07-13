import React from "react";

const APartice24 = () => {
  const isPalindrome = (str) => {
    const data = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return data.split("").reverse().join("");
  };

  // another way
  const checkPalindrome = (str) => {
    const data = str.replace(/\W/g, "").toLowerCase();
    const reverseData = data.split("").reverse().join("");
    return reverseData;
  };

  console.log(isPalindrome("random"));
  console.log(checkPalindrome("random"));
  return (
    <div>
      <h1> Palindrome</h1>
    </div>
  );
};

export default APartice24;
