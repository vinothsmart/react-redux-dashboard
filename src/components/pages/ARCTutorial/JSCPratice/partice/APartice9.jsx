const APartice9 = () => {
  const Ids = [10, 4, 5, 65, 34, 23, 85, 10, 4, 5];
  //   const uniqueValues = [...new Set(Ids)];
  //   console.log(uniqueValues);

  const unqiueValues = Ids.filter(
    (value, index) => Ids.indexOf(value) === index
  );
  console.log(unqiueValues);
  const persons = [
    { id: 1, name: "John", phone: "23" },
    { id: 2, name: "Jane", phone: "23" },
    { id: 1, name: "Johnny", phone: "56" },
    { id: 4, name: "Alice", phone: "67" },
  ];

  const uniquePersonsById = [
    ...new Map(persons.map((item) => [item.id, item])).values(),
  ];

  console.log(uniquePersonsById);

  const uniquePersonsByPhone = [
    ...new Map(persons.map((item) => [item.phone, item])).values(),
  ];

  console.log(uniquePersonsByPhone);

  return <div>APartice9</div>;
};

export default APartice9;
