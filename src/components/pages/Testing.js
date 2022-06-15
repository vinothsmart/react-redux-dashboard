import { SeoTool } from "../elements";

export const Testing = () => {
  const array = ["🐑", 1, 2, "🐑", "🐑", 3];
  // remove duplicate
  // const unique = [...new Set(array)];
  // another remove duplicate
  const unique = array.filter((item, index) => {
    console.log("index", index);
    console.log("aindex", array.indexOf(item));
    return array.indexOf(item) === index;
  });

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
          {unique.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      </div>
    </>
  );
};
