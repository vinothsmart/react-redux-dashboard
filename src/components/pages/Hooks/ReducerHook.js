import React, { useState } from "react";

const ReducerHook = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <h1>{count}</h1>
      <button>Click Here</button>
      {showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerHook;
