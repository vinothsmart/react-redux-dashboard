import React, { useImperativeHandle } from "react";
import Button from "./Component/Button";

const ImperativeHandleHook = () => {
  useImperativeHandle();
  return (
    <div>
      <button>Button From Parent</button>
      <Button />
    </div>
  );
};

export default ImperativeHandleHook;
