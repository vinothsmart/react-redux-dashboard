import { useCallback } from "react";
import { useState } from "react";
import { SeoTool } from "../elements";

export const Testing = () => {
  // var a = [ a, b, c,d,b,c,e,c]

  // const arrayList = ["a", "b", "c", "d", "b", "c", "e", "c"];

  // const result = arrayList.reduce((acc, curr) => {
  //   if (acc[curr]) {
  //     acc[curr]++;
  //   } else {
  //     acc[curr] = 1;
  //   }
  //   return acc;
  // }, {});

  // console.log(result);

  // var a = [15, 27, 43, 65];

  // var second = 0;

  // for (var i = 0; i < a.length - 1; i++) {
  //   if (a[i] > second) {
  //     second = a[i];
  //   }
  // }

  // console.log(second);

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleDecremClick = useCallback(() => {
    setCount(count - 1);
  }, [count]);

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
          <h2>{count}</h2>
          <button onClick={handleClick}> Increment</button>
          <button onClick={handleDecremClick}> Decrement</button>
        </div>
      </div>
    </>
  );
};
