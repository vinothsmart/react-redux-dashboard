export const Testing = () => {
  // const values = [1, 2, 3, 4, 5];
  // const calucate = values.map((item) => {
  //   return item - (item * 25) / 100;
  // });

  // console.log(calucate);

  // const data = values.filter((item) => item % 2 === 0);
  // console.log(data);

  const values = ["ab", "cd", "ef", "gh", "ij", "kl", "mn", "op", "qr", "st"];
  const secondValues = ["gh", "bc"];

  // const result = values.map((item) => {
  //   return item === "gh" ? "Record Found" : "Record Not Found";
  // });

  // console.log(result);

  // const result2 = secondValues.map((item) => {
  //   return item === "gh" ? "Record Found" : "Record Not Found";
  // });

  // console.log(result2);

  // const findValues = values.find((item) => item === "gh");
  // console.log(findValues);

  // const recordFound = result.includes("Record Found");
  // console.log(recordFound);
  // const recordFound2 = result2.includes("Record Found");
  // console.log(recordFound2)

  const compareTwoArrays = values.map((item) => {
    return secondValues.includes(item) ? item : "";
  });
  console.log(compareTwoArrays);

  const removeEmptyValue = compareTwoArrays.filter((item) => item !== "");
  console.log(removeEmptyValue);

  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1>Testing</h1>
        </div>
      </div>
    </>
  );
};
