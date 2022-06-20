import { SeoTool } from "../elements";

export const Testing = () => {
  const { a, b, ...c } = { c: 1, d: 2, b: 1 };
  console.log(a, b, c);
  // var y = 1;
  // if (function f() {​}​) {​
  // y += typeof f;
  // }

  // console.log(y)​

  // multiply(5)(6);

  // console.log(add(1,2,3,4,5));

  const arr = [1, 5, 3, -1, 10];
  const forEachRes = arr.forEach((num) => ++num);
  console.log("forEachRes", forEachRes);

  const arr1 = [1, 5, 3, -1, 10];
  const mapRes = arr.map((num) => ++num);
  console.log(mapRes);
  const arr2 = [1, 5, 3, -1, 10];
  const filterRes = arr.filter((num) => ++num);

  console.log(filterRes);

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
