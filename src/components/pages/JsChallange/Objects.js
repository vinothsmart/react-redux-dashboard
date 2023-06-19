import React from "react";

const Objects = () => {
  const accessObjectProp = (obj) => obj.country;
  const accessObjectofTwo = (obj) => obj["prop-2"];
  const accessObjectThree = (obj, key) => obj[key];
  return (
    <div>
      <center>
        <h1>Accessing Object Porperty</h1>
        <p>{accessObjectProp({ continent: "Asia", country: "Japan" })}</p>
        <p>{accessObjectProp({ country: "Sweden", continent: "Europe" })}</p>
      </center>
      <center>
        <h1>Accessing object properties two</h1>
        <p>{accessObjectofTwo({ one: 1, "prop-2": 2 })}</p>
        <p>{accessObjectofTwo({ "prop-2": "two", prop: "test" })}</p>
      </center>

      <center>
        <h1>Accessing object properties three</h1>
        <p>
          {accessObjectThree(
            { continent: "Asia", country: "Japan" },
            "continent"
          )}
        </p>
        <p>
          {accessObjectThree(
            { country: "Sweden", continent: "Europe" },
            "country"
          )}
        </p>
      </center>
    </div>
  );
};

export default Objects;
