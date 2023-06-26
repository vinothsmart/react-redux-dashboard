const APartice9 = () => {
  const Ids = [10, 4, 5, 65, 34, 23, 85, 10, 4, 5];
  //   const uniqueValues = [...new Set(Ids)];
  //   console.log(uniqueValues);

  const unqiueValues = Ids.filter(
    (value, index) => Ids.indexOf(value) === index
  );
  console.log(unqiueValues);
  return <div>APartice9</div>;
};

export default APartice9;
