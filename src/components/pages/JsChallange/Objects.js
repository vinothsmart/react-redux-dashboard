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

  // const createKeyWithObject = (a, b) => {
  //   return { [a]: b };
  // };

  // const createThreeObject = (a, b) => {
  //   return Object.fromEntries(a.map((_, i) => [a[i], b[i]]));
  // };

  // another method
  // const createThreeObject = (a, b) => {
  //   return a.reduce((obj, key, index) => {
  //     obj[key] = b[index];
  //     return obj;
  //   }, {});
  // };

  // another method
  // const createThreeObject = (a, b) => {
  //   return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
  // };

  // const extractKeyFromObject = (obj) => {
  //   return Object.keys(obj);
  // };

  // const getTheValueOfB = (obj) => {
  //   const firstKey = Object.keys(obj)[0];
  //   const secondKey = Object.keys(obj[firstKey])[0];
  //   // check second key as b and return the value or return undefined
  //   return secondKey === "b" ? obj[firstKey][secondKey] : undefined;
  // };

  // const getTheValueOfB = (obj) => {
  //   return obj?.a?.b;
  // };

  // console.log(getTheValueOfB({ a: 1 }));
  // console.log(getTheValueOfB({ a: { b: { c: 3 } } }));
  // console.log(getTheValueOfB({ b: { a: 1 } }));
  // console.log(getTheValueOfB({ a: { b: 2 } }));

  const sumtheObjectValues = (obj) => {
    return Object.values(obj).reduce((a, b) => a + b);
  };

  // another method
  // const sumtheObjectValuesTwo = (a) => {
  //   return Object.values(a).reduce((sum, cur) => sum + cur, 0);
  // };

  // const removeBFromObject = (obj) => {
  //   delete obj.b;
  //   return obj;
  // };

  // another method
  // const removeBFromObject = (obj) => {
  //   const { b, ...rest } = obj;
  //   return rest;
  // };

  // console.log(removeBFromObject({ a: 1, b: 2, c: 3 }));
  // console.log(removeBFromObject({ b: 0, a: 7, d: 8 }));
  // console.log(removeBFromObject({ e: 6, f: 4, b: 5, a: 3 }));

  // const changeSecondParamterBTOD = (x, y) => {
  //   const { b, ...rest } = y;
  //   const d = { b };
  //   // change key value of b to d
  //   const newB = Object.fromEntries(
  //     Object.entries(d).map(([key, val]) => [key.replace("b", "d"), val])
  //   );

  //   return { ...x, ...rest, ...newB };
  // };

  // another method
  // const changeSecondParamterBTOD = (x, y) => {
  //   const { b, ...rest } = y;
  //   return { ...x, ...rest, d: b };
  // };

  // console.log(changeSecondParamterBTOD({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
  // console.log(changeSecondParamterBTOD({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

  // const multiplyAllObjetByX = (a, b) => {
  //   return Object.fromEntries(
  //     Object.entries(a).map(([key, val]) => [key, val * b])
  //   );
  // };

  // another method
  const multiplyAllObjetByX2 = (a, b) => {
    return Object.entries(a).reduce((acc, [key, val]) => {
      return { ...acc, [key]: val * b };
    }, {});
  };

  console.log(multiplyAllObjetByX2({ a: 1, b: 2, c: 3 }, 3));
  console.log(multiplyAllObjetByX2({ j: 9, i: 2, x: 3, z: 4 }, 10));
  console.log(multiplyAllObjetByX2({ w: 15, x: 22, y: 13 }, 6));

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
      {/* <center>
        <h1>Creating Javascript objects two</h1>
        <p>{createKeyWithObject("a", "b")}</p>
        <p>{createKeyWithObject("z", "x")}</p>
        <p>{createKeyWithObject("b", "w")}</p>
      </center> */}
      {/* <center>
        <h1>Creating Javascript objects three</h1>
        <p>{createThreeObject(["a", "b", "c"], [1, 2, 3])}</p>
        <p>{createThreeObject(["w", "x", "y", "z"], [10, 9, 5, 2])}</p>
        <p>{createThreeObject([1, "b"], ["a", 2])}</p>
      </center> */}
      {/* <center>
        <h1>Extract keys from Javascript object</h1>
        <p>{extractKeyFromObject({ a: 1, b: 2, c: 3 })}</p>
        <p>{extractKeyFromObject({ j: 9, i: 2, x: 3, z: 4 })}</p>
        <p>{extractKeyFromObject({ w: 15, x: 22, y: 13 })}</p>
      </center> */}
      {/* <center>
        <h1>Return nested object property</h1>
        <p>{getTheValueOfB({ a: 1 })}</p>
        <p>{getTheValueOfB({ a: { b: { c: 3 } } })}</p>
        <p>{getTheValueOfB({ b: { a: 1 } })}</p>
      </center> */}
      <center>
        <h1>Sum object values</h1>
        <p>{sumtheObjectValues({ a: 1, b: 2, c: 3 })}</p>
        <p>{sumtheObjectValues({ j: 9, i: 2, x: 3, z: 4 })}</p>
        <p>{sumtheObjectValues({ w: 15, x: 22, y: 13 })}</p>
      </center>
      <center>
        <h1>Remove a property from an object</h1>
        <h1>Merge two objects with matching keys</h1>
        <h1>Multiply all object values by x</h1>
      </center>
    </div>
  );
};

export default Objects;
