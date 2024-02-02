import React from "react";

const ArrayMethods = () => {
  const items = [
    { name: "bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
    { name: "Keyboard", price: 25 },
  ];

  //filter method
  const filteredItems = items.filter((item) => {
    return item.price >= 100;
  });
  //   console.log(filteredItems);

  // map method
  const itemNames = items.map((item) => {
    return item.name;
  });

  //   console.log(itemNames);

  const findItem = items.find((item) => {
    return item.name === "Book";
  });

  console.log(findItem);

  return <div>ArrayMethods</div>;
};

export default ArrayMethods;
