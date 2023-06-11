export const Testing = () => {
  const data = { a: { b: { c: { d: "foo" } } } };
  const firstKey = Object.keys(data)[0];
  const secondKey = Object.keys(data.a);
  const thirdKey = Object.keys(data.a.b);
  const fourthKey = Object.keys(data.a.b.c);
  const listArray = [...firstKey, ...secondKey, ...thirdKey, ...fourthKey];
  console.log(listArray);
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
