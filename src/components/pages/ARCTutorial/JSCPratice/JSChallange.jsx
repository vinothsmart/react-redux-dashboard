import APartice19 from "./partice/APartice19";

const JSChallange = () => {
  const data = {
    student: [
      {
        id: 20,
        firstName: "John",
        lastName: "Doe",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
      },
      {
        id: 5,
        firstName: "John",
        lastName: "Smith",
      },
    ],
  };

  const result = data.student.filter((item) => (item.id > 5 ? item : null));
  console.log(result);
  return <APartice19 />;
};

export default JSChallange;
