import React from "react";

const APartice5 = () => {
  const validateValue = 10.5;
  console.log(!isNaN(validateValue));
  const validateValue2 = 10;
  console.log(!isNaN(validateValue2));
  const validateValue3 = "10";
  console.log(isNaN(validateValue3));
  return <div>APartice5</div>;
};

export default APartice5;
