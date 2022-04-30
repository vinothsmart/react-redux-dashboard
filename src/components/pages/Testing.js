import { SeoTool } from "../elements";

export const Testing = () => {
  const calCaluateDays = (calcData) => {
    const currentDate = new Date();
    const date1 = new Date(calcData);
    const diff = Math.abs(date1.getTime() - currentDate.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays;
  };
  // 2 days before
  const daysBefore = calCaluateDays("2022-04-24");
  console.log(daysBefore);

  const numbers = [1, 2, 3, 4];
  const result1 = numbers.reduce((acc, curr) => acc + curr);

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
          <h1>Total sum {result1}</h1>
        </div>
      </div>
    </>
  );
};
