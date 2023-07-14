export const Testing = () => {
  // const values = [1, 2, 3, 4, 5];
  // const calucate = values.map((item) => {
  //   return item - (item * 25) / 100;
  // });

  // console.log(calucate);

  // const data = values.filter((item) => item % 2 === 0);
  // console.log(data);

  const values = ["ab", "cd", "ef", "gh", "ij", "kl", "mn", "op", "qr", "st"];
  const secondValues = ["gh", "cd"];

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
    return secondValues.includes(item) ? "" : item;
  });
  console.log(compareTwoArrays);

  const removeEmptyValue = compareTwoArrays.filter((item) => item !== "");
  console.log(removeEmptyValue);

  const numbers = [1, 4, 2, 7, 23, 54, 22, 111, 11];

  // const sortingNUmbers = numbers.map((item) => {
  //   //  sorting using bubble sort
  // });

  const sortNumber = numbers.reduce((acc, item) => {
    return acc > item ? acc : item;
    // using sort
    // const data = [];
    // if (acc > item) {
    //   data.push(acc);
    // } else {
    //   data.push(item);
    //   // return item;
    // }
    // return data;
  }, []);

  console.log(sortNumber);

  const sortData = numbers.map((item) => {
    if (item === sortNumber) {
      return item;
    }
    return item;
  });

  console.log(sortData);

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
