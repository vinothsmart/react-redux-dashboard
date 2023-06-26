const APartice11 = () => {
  const numbers = [5, 45, 54, 63, 87, 72, 98, 12, 10];

  // another way
  const largerestNumber3 = numbers.reduce(
    (larger, number) => (number > larger ? number : larger),
    0
  );

  console.log(largerestNumber3);

  // another way with Math.max
  const largerestNumber4 = Math.max(...numbers);
  console.log(largerestNumber4);

  return <div>APartice11</div>;
};

export default APartice11;
