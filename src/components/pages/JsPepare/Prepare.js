const Part1 = () => {
  // Map
  const a = [1, 2, 3, 4];

  // for loop is equal to foreach
  // foreach alernative
  for (let i = 0; i < a.length; i++) {
    console.log("for", a[i]);
  }

  a.forEach((item, index) => {
    console.log("foreach", item);
  });

  // map alternative
  const arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push(a[i]);
  }
  console.log("mapalter", arr);

  const c = a.map((item, index) => item * 2);

  // print with condition even numbers
  const d = a.filter((item, index) => {
    if (item % 2 === 0) {
      return item;
    }
  });

  // Diff foreach and map
  // foreach is loop the array not return anything
  // map is return the new array
  // filter is return the also new array
  // console.log(b);
  console.log("map", c);
  console.log("filter", d);

  //a.map((item, index) => {});  [undefined, undefined, undefined, undefined] map run current length of array
  //a.filter((item, index) => {});  [] filter create new array with condition then push to new array

  // task
  const x = ["VinothKanna", "Alamelumangai"];
  const y = x.map((item) => item);
  console.log(y);
  const studentMark = [60, 40, 20, 70, 90];
  const result = studentMark.filter((item) => item > 30);
  console.log(result);

  const resultEvery = studentMark.every((item) => item > 30);
  console.log(resultEvery);

  const resultSome = studentMark.some((item) => item > 30);
  console.log(resultSome);

  return <div>Part1</div>;
};

export default Part1;
