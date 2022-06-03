import { useState } from "react";
import { SeoTool } from "../elements";

export const Testing = () => {
  const names = ["m", "h", "S"];

  const findM = names.find((name) => name === "m");

  console.log(findM);

  function multipleBySum(sum) {
    return sum * 2;
  }

  function operation(num1, num2, operation) {
    let sum = num1 + num2;
    return operation(sum);
  }

  operation(5, 5, multipleBySum);

  let vvv = "vinoth";

  if (vvv === undefined) {
    console.log("no value");
  } else {
    console.log("have value");
  }

  const [name, setName] = useState("vinoth");

  const handleChange = () => {
    setName("Kanna");
  };

  return (
    <>
      <SeoTool
        title="Testing"
        keywords="Vinoth App React Redux Dashboard"
        description="Vinoth App React Redux Dashboard"
      />
      <div className="container">
        <div className="py-4">
          <h1> Testing Page</h1>
        </div>
      </div>
    </>
  );
};
