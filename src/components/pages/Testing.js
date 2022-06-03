import { useCallback, useState } from "react";
import { SeoTool } from "../elements";

export const Testing = () => {
  const vinoth = [1, 2, 3, 4, 5];
  const n = 0;
  // output 3,4,5,1,2

  const getNValue = vinoth.splice(0, n);
  const getRemainingValues = vinoth.splice(vinoth.length - n, n);

  const result = [...getRemainingValues, ...getNValue];

  console.log(result);

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
