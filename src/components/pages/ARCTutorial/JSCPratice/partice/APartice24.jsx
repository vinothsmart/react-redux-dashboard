import React from "react";

const APartice24 = () => {
  const isPalindrome = (str) => {
    const data = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return data.split("").reverse().join("");
  };

  console.log(isPalindrome("random"));
  return (
    <div>
      <h1> Palindrome</h1>
    </div>
  );
};

export default APartice24;
