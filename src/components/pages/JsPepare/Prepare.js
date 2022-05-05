const Part1 = () => {
  // Map
  let a = [1, 2, 3, 4];

  a.forEach((item, index) => {
    console.log(item);
    console.log(index);
    console.log("----------");
  });
  a.map((item, index) => {
    console.log(item);
    console.log(index);
    console.log("----------");
  });
  return <div>Part1</div>;
};

export default Part1;
