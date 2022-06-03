import { useCallback, useState } from "react";
import { SeoTool } from "../elements";

export const Testing = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showUserData, setShowUserData] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSumbit = useCallback(() => {
    setShowUserData(true);
  }, []);

  return (
    <>
      <SeoTool
        title="Testing"
        keywords="Vinoth App React Redux Dashboard"
        description="Vinoth App React Redux Dashboard"
      />
      <div className="container">
        <div className="py-4">
          <h1> Testing Page</h1>
          <input type="text" name="userName" onChange={handleChange} />
          <input type="text" name="userAge" onChange={handleChange} />
          <input type="text" name="userPhone" onChange={handleChange} />
          <button onClick={handleSumbit}>add</button>
          {showUserData && (
            <div>
              <p>Name : {userData.name}</p>
              <p>Age : {userData.userAge}</p>
              <p>Phone : {userData.userPhone}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
