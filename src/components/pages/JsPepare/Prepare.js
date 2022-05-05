const Part1 = () => {
  // Map
  let a = [1, 2, 3, 4];

  let b = a.forEach((item, index) => {
    return item;
  });
  let c = a.map((item, index) => {
    return item;
  });
  // Diff foreach and map
  // foreach is loop the array not return anything
  // map is return the new array

  console.log(b);
  console.log(c);
  return <div>Part1</div>;
};

export default Part1;
