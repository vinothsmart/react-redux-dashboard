import { useState, useEffect } from "react";
import Button from "./Button";

export const Count = () => {
  const [count, setCount] = useState(0);

  const incrementCount = (addedValue) => {
    // console.log("values");
    setCount(count + addedValue);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      //   console.log("cccccc");
      //   alert(timeout);
      setCount(0);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <>
      {/* <button onClick={() => incrementCount(1)}> Press One</button>
      <button onClick={() => incrementCount(2)}> Press Two</button>
      <button onClick={() => incrementCount(3)}> Press Three</button> */}
      <Button incrementingValue={() => incrementCount(1)} buttonName="1" />
      <Button incrementingValue={() => incrementCount(2)} buttonName="2" />
      <Button incrementingValue={() => incrementCount(3)} buttonName="3" />
      <p> Values u have Clicked: {count}</p>
    </>
  );
};
