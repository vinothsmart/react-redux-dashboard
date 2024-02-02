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

  //   console.log(findItem);

  const itemForEach = items.forEach((item) => {
    // console.log(item.price * 0.12);
  });

  //   console.log(itemForEach);

  // some
  const hasInexpensiveItems = items.some((item) => {
    return item.price <= 0;
  });
  //   console.log(hasInexpensiveItems);

  //   every
  const hasInexpensiveItemsEvery = items.every((item) => {
    return item.price <= 1000;
  });

  console.log(hasInexpensiveItemsEvery);

  return <div>ArrayMethods</div>;
};

export default ArrayMethods;
