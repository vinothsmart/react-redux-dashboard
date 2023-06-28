import React from "react";

const APartice19 = () => {
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
  return <div>APartice19</div>;
};

export default APartice19;
