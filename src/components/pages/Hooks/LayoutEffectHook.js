import React, { useEffect, useLayoutEffect } from "react";

const LayoutEffectHook = () => {
  useLayoutEffect(() => {
    console.log("LayoutEffectHook");
  }, []);
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return <div>LayoutEffectHook</div>;
};

export default LayoutEffectHook;
