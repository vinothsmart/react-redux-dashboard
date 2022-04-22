import React, { useState } from "react";

const StateHook = () => {
  // const [counter, setCounter] = useState(0);
  // const increment = () => {
  //   setCounter((prev) => prev + 1);
  // };

  const [inputValue, setInputValue] = useState("Vinoth");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      {/* {counter}
      <button onClick={increment}>Increment</button> */}
      <input onChange={handleChange} placeholder="enter something" />
      {inputValue}
    </div>
  );
};

export default StateHook;
