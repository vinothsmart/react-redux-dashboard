import React from "react";

const APartice3 = () => {
  const dulicatedArray = [14, 23, 6, 6, 14, 56, 87, 14];
  //   method1
  const uniqueArray = [...new Set(dulicatedArray)];
  console.log(uniqueArray);
  // method2
  const uniqueArray2 = dulicatedArray.filter(
    (item, index) => dulicatedArray.indexOf(item) === index
  );
  console.log(uniqueArray2);
  // find duplicate in array
  const duplicate = dulicatedArray.filter(
    (item, index, arr) => arr.indexOf(item) !== index
  );

  console.log(duplicate);

  return <div>APartice3</div>;
};

export default APartice3;
