import React from "react";

const APartice23 = () => {
  let students = [10, 11, 12, 13, 14, 15];

  // Technique 1
  // students = [];

  // Techique 2
  // students.length = 0;

  // Techique 3
  // while (students.length > 0) {
  //   students.pop();
  // }

  // Techique 4
  students.splice(0, students.length);

  console.log(students.length);
  console.log(students);
  return (
    <div>
      <h1> Empty an array</h1>
    </div>
  );
};

export default APartice23;
