const APartice12 = () => {
  const numbers = [5, 45, 54, 63, 87, 72, 98, 2, 10];

  const smallLatestNumber = numbers.reduce((preVal, curVal) =>
    preVal < curVal ? preVal : curVal
  );

  console.log({ smallLatestNumber });

  const smallLatesNumber2 = Math.min(...numbers);

  console.log({ smallLatesNumber2 });

  return <div>APartice12</div>;
};

export default APartice12;
