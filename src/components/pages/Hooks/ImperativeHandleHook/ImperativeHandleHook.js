import React, { useRef } from "react";
import Button from "./Button";

const ImperativeHandleHook = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <button onClick={() => buttonRef.current.alterToggle()}>
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default ImperativeHandleHook;
