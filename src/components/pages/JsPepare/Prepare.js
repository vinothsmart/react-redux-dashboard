const Part1 = () => {
  // Map
  const a = [1, 2, 3, 4];

  const b = a.forEach((item, index) => {
    return item;
  });

  const c = a.map((item, index) => {});

  const d = a.filter((item, index) => {});

  // Diff foreach and map
  // foreach is loop the array not return anything
  // map is return the new array
  // filter is return the also new array
  console.log(b);
  console.log(c);
  console.log(d);

  //a.map((item, index) => {});  [undefined, undefined, undefined, undefined] map run current length of array
  //a.filter((item, index) => {});  [] filter create new array with condition then push to new array

  return <div>Part1</div>;
};

export default Part1;
