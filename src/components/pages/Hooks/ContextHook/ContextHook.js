import React, { useState } from "react";
import Login from "./Login";
import User from "./User";

const ContextHook = () => {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <Login setUserName={setUserName} />
      <User userName={userName} />
    </div>
  );
};

export default ContextHook;
