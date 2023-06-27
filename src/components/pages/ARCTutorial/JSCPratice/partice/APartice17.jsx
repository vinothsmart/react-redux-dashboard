import React from "react";

const APartice17 = () => {
  const string1 = "Mary";
  const string2 = "Army";

  const isAnagram = (str1, str2) => {
    const a = str1.toLowerCase().split("").sort().join("");
    const b = str2.toLowerCase().split("").sort().join("");
    return a === b;
  };

  console.log(isAnagram(string1, string2));

  return <div>APartice17</div>;
};

export default APartice17;
