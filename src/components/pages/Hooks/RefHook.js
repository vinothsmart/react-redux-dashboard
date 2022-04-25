import React, { useRef } from "react";

const RefHook = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <center>
        <h1>Name</h1>
        <input type="text" placeholder="Ex...." ref={inputRef} />
        <button onClick={onClick}> Change Name</button>
      </center>
    </div>
  );
};

export default RefHook;
