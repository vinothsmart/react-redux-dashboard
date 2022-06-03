import { useCallback, useState } from "react";
import { SeoTool } from "../elements";

export const Testing = () => {
  const checkNull = typeof null;
  const ssss = typeof undefined;

  console.log(checkNull);
  console.log(ssss);
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
