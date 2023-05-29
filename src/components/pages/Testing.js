export const Testing = () => {
  const object = { a: { b: { c: { d: "foo" } } } };

  const firstkey = Object.keys(object)[0];
  const secondkey = Object.keys(object[firstkey])[0];
  const thirdkey = Object.keys(object[firstkey][secondkey])[0];
  const fourthkey = Object.keys(object[firstkey][secondkey][thirdkey])[0];

  console.log([firstkey, secondkey, thirdkey, fourthkey]);

  // same as function above
  const keys = Object.keys(object).reduce((acc, key) => {
    acc.push(key);
    // second need to inner object key here
    const innerKey = Object.keys(object[key])[0];
    acc.push(innerKey);
    // third need to inner object key here
    const innerInnerKey = Object.keys(object[key][innerKey])[0];
    acc.push(innerInnerKey);
    // fourth need to inner object key here
    const innerInnerInnerKey = Object.keys(
      object[key][innerKey][innerInnerKey]
    )[0];
    acc.push(innerInnerInnerKey);
    return acc;
  }, []);
  console.log(keys);
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
