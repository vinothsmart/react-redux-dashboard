export const Testing = () => {
  const object = { a: { b: { c: { d: "foo" } } } };

  const firstkey = Object.keys(object)[0];
  const secondkey = Object.keys(object[firstkey])[0];
  const thirdkey = Object.keys(object[firstkey][secondkey])[0];
  const fourthkey = Object.keys(object[firstkey][secondkey][thirdkey])[0];

  console.log([firstkey, secondkey, thirdkey, fourthkey]);

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
