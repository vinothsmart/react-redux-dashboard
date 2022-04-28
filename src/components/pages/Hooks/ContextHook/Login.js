import React, { useContext } from "react";
import { UserContext } from "./ContextHook";

const Login = () => {
  const { setUserName } = useContext(UserContext);
  return (
    <div>
      <input onChange={(e) => setUserName(e.target.value)} />
    </div>
  );
};

export default Login;
