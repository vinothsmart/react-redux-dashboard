import React, { useEffect, useLayoutEffect, useRef } from "react";

const LayoutEffectHook = () => {
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  useEffect(() => {
    inputRef.current.value = "Hello";
  }, []);
  return (
    <div>
      <input
        ref={inputRef}
        value="vinoth"
        style={{
          width: 400,
          height: 40,
        }}
      />
    </div>
  );
};

export default LayoutEffectHook;
