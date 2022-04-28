import { SeoTool } from "../elements";

export const Testing = () => {
  // ["a","a","a","b","b","c","c","c","c"] -------> {a:3,b:2,c:4}
  const arr = ["a", "a", "a", "b", "b", "c", "c", "c", "c"];

  const result = arr.reduce((obj, item) => {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
    return obj;
  }, {});
  console.log(result);

  const numbers = [1, 3, 4];

  const sumNum = numbers.reduce((acc, curr) => acc + curr);

  console.log(sumNum);
  let tot = 0;
  numbers.map((num) => {
    return (tot += num);
  });
  console.log(tot);

  const lllnames = ["Alamelumnagai", "vinoth"];
  const longes = lllnames.reduce((preVal, curreVal) => {
    return preVal.length > curreVal.length ? preVal : curreVal;
  });

  console.log(longes);

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
