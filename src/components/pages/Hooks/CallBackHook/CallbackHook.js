import { useCallback, useState } from "react";
import Child from "./Child";

const CallbackHook = () => {
  const [toggle, setToggle] = useState(false);
  const [data] = useState("hi Vinoth");

  const printName = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );
  return (
    <div>
      <Child printName={printName} />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>Toggle</h1>}
    </div>
  );
};

export default CallbackHook;
