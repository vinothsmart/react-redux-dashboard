import React from "react";

const Objects = () => {
  const accessObjectProp = (obj) => obj.country;
  return (
    <div>
      <center>
        <h1>Accessing Object Porperty</h1>
        <p>{accessObjectProp({ continent: "Asia", country: "Japan" })}</p>
        <p>{accessObjectProp({ country: "Sweden", continent: "Europe" })}</p>
      </center>
    </div>
  );
};

export default Objects;
