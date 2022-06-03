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
  const uniqueNames = names.reduce((acc, curr) => {
    if (!acc.includes(curr.name)) {
      acc.push(curr.name);
    }
    return acc;
  }, []);

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
