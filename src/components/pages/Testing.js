import { SeoTool } from "../elements";

export const Testing = () => {
  const name = "vinothkanaa";

  // reverse the name
  const reverseName = name
    .split("")
    .map((item) => item)
    .reverse()
    .join("");

  console.log(reverseName);
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
