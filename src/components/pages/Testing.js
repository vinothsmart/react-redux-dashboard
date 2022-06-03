import { useCallback, useState } from "react";
import { SeoTool } from "../elements";

export const Testing = () => {
  const names = [
    {
      name: "Ganesh",
    },
    {
      name: "Vinoth",
    },
    {
      name: "Ganesh",
    },
  ];

  // remove duplicate
  const uniqueNames = [...new Set(names.map((item) => item.name))];
  console.log(uniqueNames);

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
