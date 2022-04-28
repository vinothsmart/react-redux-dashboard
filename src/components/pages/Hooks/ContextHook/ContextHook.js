import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const UserContext = createContext(null);

const ContextHook = () => {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <UserContext.Provider value={{ userName, setUserName }}>
        <Login />
        <User />
      </UserContext.Provider>
    </div>
  );
};

export default ContextHook;
