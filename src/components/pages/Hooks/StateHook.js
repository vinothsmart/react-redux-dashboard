import React, { useState } from "react";

const StateHook = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default StateHook;
