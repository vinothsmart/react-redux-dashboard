import React from "react";

const Sets = () => {
  const checkValuePresent = (set, val) => {
    return set.has(val);
  };

  return (
    <>
      <center>
        <h1>Check if value is present in Set</h1>
        <p>{checkValuePresent(new Set([1, 2, 3]), 2) ? "true" : "false"}</p>
        <p>{checkValuePresent(new Set([123]), 2) ? "true" : "false"}</p>
        <p>
          {checkValuePresent(new Set(["1", "2", "3"]), "2") ? "true" : "false"}
        </p>
        <p>{checkValuePresent(new Set("123"), "2") ? "true" : "false"}</p>
      </center>
    </>
  );
};

export default Sets;
