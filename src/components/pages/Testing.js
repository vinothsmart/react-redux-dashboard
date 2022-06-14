import { useCallback } from "react";
import { useState } from "react";
import { SeoTool } from "../elements";

export const Testing = () => {
  // Write React JS Application to create Two TextField  One Name Other City and One Submit Button ,When user enter the value Name,City and CliCk Submit Button then value print it

  const [values, setValues] = useState({
    name: "",
    city: "",
  });

  const handleChange = useCallback((e) => {
    // setValues({
    //   [e.target.name]: e.target.value,
    // });
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(values);
    },
    [values]
  );

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
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};
