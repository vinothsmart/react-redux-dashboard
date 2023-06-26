const APartice10 = () => {
  const Ids = [23, 45, 64, 67, 23, 45, 98, 75, 69];

  const sortingUniqueValues = Ids.filter(
    (value, index) => Ids.indexOf(value) === index
  ).sort((a, b) => a - b);

  console.log(sortingUniqueValues);
  return <div>APartice10</div>;
};

export default APartice10;
