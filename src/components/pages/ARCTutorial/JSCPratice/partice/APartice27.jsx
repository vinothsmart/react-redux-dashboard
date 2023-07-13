const APartice27 = () => {
  const studentIds = [10, 20, 30, 50, 324, 544, 545];

  const replaceAt = 1;

  const replaceWith = 15;

  const newStudentIds = [
    ...studentIds.slice(0, replaceAt),
    replaceWith,
    ...studentIds.slice(replaceAt + 1),
  ];
  console.log(newStudentIds);

  return (
    <>
      <h1> APartice27</h1>
    </>
  );
};

export default APartice27;
