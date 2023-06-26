const APartice13 = () => {
  // const numbers = [5, 45, 54, 63, 87, 72, 98, 2, 10];
  const numbers = [59, 53, 23, 1, 67, 84, 10];
  const totalCount = numbers.reduce((preVal, curVal) => preVal + curVal);
  const totalLength = numbers.length;
  const percentage = totalCount / totalLength;
  console.log(percentage);
  return <div>APartice13</div>;
};

export default APartice13;
