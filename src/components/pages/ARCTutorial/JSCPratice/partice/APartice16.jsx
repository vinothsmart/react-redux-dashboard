import React from "react";

const APartice16 = () => {
  const studentIds = [1, 2, 3, 4, 5, 6, 7, 8];
  const passedIds = [10, 34, 65];
  const result = studentIds.some((id) => passedIds.includes(id));
  console.log(result);
  return <div>APartice16</div>;
};

export default APartice16;
