const APartice18 = () => {
  const input = {
    students: [
      {
        name: "vinoth",
        id: 10,
        email: "test@gmail.com",
      },
      {
        name: "kumar",
        id: 12,
        email: "kumar@gmail.com",
      },
      {
        name: "dinesh",
        id: 13,
        email: "dinesh@gmail.com",
      },
    ],
  };

  const output = input.students.map(({ name, email }) => {
    return {
      name,
      email,
    };
  });

  console.log(output);
  return <div>APartice18</div>;
};

export default APartice18;
