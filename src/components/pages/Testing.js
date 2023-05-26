export const Testing = () => {
  // const object = { a: { b: { c: { d: "foo" } } } };

  // const extractKey = (obj, key) => {
  //   const keys = key.split(".");
  //   const firstKey = keys.shift();
  //   const remainingKeys = keys.join(".");
  //   if (obj[firstKey] && typeof obj[firstKey] === "object") {
  //     return extractKey(obj[firstKey], remainingKeys);
  //   }
  //   return obj[firstKey];
  // };

  // console.log(extractKey(obj));

  // const getObjectKey = (obj) => {
  //   const keys = Object.keys(obj);
  //   console.log(keys);
  //   // convert object to array
  //   const arr = Object.entries(obj);
  //   console.log(arr);
  //   const firstKey = keys.shift();
  //   console.log(firstKey);

  //   // const firstKey = keys.shift();
  //   // const remainingKeys = keys.join(".");
  //   // if (obj[firstKey] && typeof obj[firstKey] === "object") {
  //   //   return getObjectKey(obj[firstKey], remainingKeys);
  //   // }
  //   // return obj[firstKey];
  // };

  // console.log(getObjectKey(object));

  const items = [
    { name: "east", value: 21 },
    { name: "south", value: 37 },
    { name: "atlanta", value: 45 },
    { name: "Terrain", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zone", value: 37 },
  ];

  const sortedItemsByValue = items.sort((a, b) => {
    return a.value - b.value;
  });

  console.log(sortedItemsByValue);

  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1> Testing Page</h1>
        </div>
      </div>
    </>
  );
};
