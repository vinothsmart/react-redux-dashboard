import { SeoTool } from "../elements";

export const Testing = () => {
  const names = ["vinoth", "kanna", "Santhosh", "Selva"];

  // get longest name
  const longestName = names.reduce((a, b) => {
    return a.length > b.length ? a : b;
  }, "");

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
          <h3>Longest Name : {longestName}</h3>
        </div>
      </div>
    </>
  );
};
