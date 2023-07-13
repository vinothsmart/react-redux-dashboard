import APartice26 from "./partice/APartice26";

const JSChallange = () => {
  const students = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const newStudents = students.slice().reverse();
  console.log(students);
  console.log(newStudents);

  // sort and reverse array without mutating original array
  const sortStudents = students.slice().sort().reverse();
  console.log(sortStudents);

  // another way
  const sortStudents2 = [...students].sort().reverse();
  console.log(sortStudents2);

  // another way
  const sortStudents3 = [...students].sort((a, b) => {
    if (a > b) {
      return -1;
    } else {
      return 1;
    }
  });
  console.log(sortStudents3);

  return <APartice26 />;
};

export default JSChallange;
