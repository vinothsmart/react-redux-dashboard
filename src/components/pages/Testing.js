import { SeoTool } from "../elements";

export const Testing = () => {
  const numbers = [1, 2, 3, 4, 5];
  const n = 2;
  const removNumberByN = numbers.slice(n);
  const getValuesByN = numbers.slice(0, n);

  const newNumbers = [...removNumberByN, ...getValuesByN];
  console.log(newNumbers);
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
