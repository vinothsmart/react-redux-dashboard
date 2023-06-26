import APartice7 from "./partice/APartice7";

const JSChallange = () => {
  const unsortedArr = [10, 4, 29, 34, 63, 3, 87, 72];
  const sorting = unsortedArr.sort((a, b) => a - b);

  console.log(sorting);
  return <APartice7 />;
};

export default JSChallange;
