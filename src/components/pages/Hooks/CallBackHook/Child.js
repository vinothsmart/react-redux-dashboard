import { useEffect } from "react";

const Child = ({ printName }) => {
  useEffect(() => {
    console.log("Function is Called");
  }, [printName]);
  return <div>{printName("Kanna")}</div>;
};

export default Child;
