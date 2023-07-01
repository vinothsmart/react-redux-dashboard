import React from "react";

const Objects = () => {
  const accessObjectProp = (obj) => obj.country;
  const accessObjectofTwo = (obj) => obj["prop-2"];
  const accessObjectThree = (obj, key) => obj[key];
  //   const accessObjectofFour = (obj, key) => {
  //     // check if the key is in the object
  //     if (obj.hasOwnProperty(key)) {
  //       return "true";
  //     }
  //     return "false";
  //   };
  // another method
  const accessObjectofFour = (obj, key) => (key in obj ? "true" : "false");

  // check if property exists in object and is truthy
  // const isObjectPropertyTruthy = (obj, key) => {
  //   if (key in obj) {
  //     return obj[key] ? "true" : "false";
  //   }
  //   return "false";
  // };

  // another method
  // const isObjectPropertyTruthy = (obj, key) => (obj[key] ? "true" : "false");

  // another method
  const isObjectPropertyTruthy = (a, b) => Boolean(a[b]);

  const createObjectWithKey = (a) => {
    return { key: a } ? "true" : "false";
  };

  const createKeyWithObject = (a, b) => {
    return { [a]: b };
  };

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
      <center>
        <h1>Accessing object properties Four</h1>
        <p>{accessObjectofFour({ a: 1, b: 2, c: 3 }, "b")}</p>
        <p>{accessObjectofFour({ x: "a", y: "b", z: "c" }, "a")}</p>
        <p>{accessObjectofFour({ x: "a", y: "b", z: undefined }, "z")}</p>
      </center>
      <center>
        <h1>Check if property exists in object and is truthy Five</h1>
        <p>{isObjectPropertyTruthy({ a: 1, b: 2, c: 3 }, "b")}</p>
        <p>{isObjectPropertyTruthy({ x: "a", y: null, z: "y" }, "b")}</p>
        <p>{isObjectPropertyTruthy({ x: "a", b: "b", z: undefined }, "z")}</p>
      </center>
      <center>
        <h1>Create Object</h1>
        <p>{createObjectWithKey("a")}</p>
        <p>{createObjectWithKey("z")}</p>
        <p>{createObjectWithKey("b")}</p>
      </center>

      <center>
        <h1>Creating Javascript objects two</h1>
        <p>{createKeyWithObject("a", "b")}</p>
        <p>{createKeyWithObject("z", "x")}</p>
        <p>{createKeyWithObject("b", "w")}</p>
      </center>
    </div>
  );
};

export default Objects;
