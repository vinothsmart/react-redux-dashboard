const APartice6 = () => {
  //   const month = "July";
  //   month = "February";
  //   console.log(month); // type error - assignment to constant

  let person = {
    name: "John",
  };

  Object.freeze(person);

  person.name = "Jane";

  console.log(person.name); // John

  return <div>APartice6</div>;
};

export default APartice6;
