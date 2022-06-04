import { SeoTool } from "../elements";

export const Testing = () => {
  const mutlipby2 = (x) => x * 2;

  const total = (n1, n2, callBackFunc) => {
    const sum = n1 + n2;
    return callBackFunc(sum);
  };

  const result = total(5, 5, mutlipby2);

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
