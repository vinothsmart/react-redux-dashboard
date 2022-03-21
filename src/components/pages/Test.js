import { SeoTool } from "../elements";

export const Test = () => {
  let numbers = [1, 55, 22, 60, 4];

  console.log(numbers);

  numbers.map((number) => {
    return number;
  });

  /**
   *
   *asdasdada
   */
  let numberss = [1, 9, 6, 21, 13, 77];

  let names = ["vinoth", "kanna", "Santhosh", "Selva"];

  let names1 = ["vinoth"];

  let names3 = [...names, ...names1];

  numberss.map((num) => {
    return num;
  });

  let getLastNumberofRow = numbers.reduce(function checkLastNumberofRow(a, b) {
    console.log(a);
    console.log(b);
    return a.length > b.length ? a : b;
  });

  console.log("Last Row Name", getLastNumberofRow);

  console.log("Longest numbers", Math.max(...numbers));

  console.log("Longest numbers index", numbers.indexOf(Math.max(...numbers)));

  let longestName = names.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });

  console.log("Longest Name", longestName);

  console.log(names3);

  let names4 = names.concat(names1);

  console.log(names4);

  numbers.map((num) => {
    return num;
  });

  /**
   * [test2]
   */
  // filter()

  const studentsAge = [17, 16, 18, 19, 21, 17];
  const ableToDrink = studentsAge.filter((age) => age > 18);

  const ableToDrinkMap = studentsAge.map((age) => (age > 18 ? age : "no"));

  console.log(ableToDrink);
  console.log(ableToDrinkMap);

  let a = [0, 1, 0, 2, 0, 0, 0, 3, 0, 0, 0];
  let numberNoZero = a.filter((a) => a > 0);

  let numberOnlyZero = a.filter((a) => (a = 0));

  console.log(numberNoZero);

  console.log(numberOnlyZero);

  /**
   * [test3]
   */
  const animals = ["squirrel", "bear", "deer", "salmon", "rat"];

  console.log(animals.slice(0, 4));

  var add = function (x, y) {
    console.log(x + y);
  };

  new add(2, 3);

  // let addaaaa = (c, d) => console.log(c + d);
  // new addaaaa(2, 3);

  const array2 = [1, 2, 3, 4, 4, 1];

  array2.filter((item, index) => {
    console.log(
      // a. Item
      item,
      // b. Index
      index,
      // c. indexOf
      array2.indexOf(item),
      // d. Condition
      array2.indexOf(item) === index
    );

    return array2.indexOf(item) === index;
  });

  var array = [1, 2, 3, 4, 5];
  console.log(array.slice(2));
  // shows [3, 4, 5], returned selected element(s).

  console.log(array.slice(-2));
  // shows [4, 5], returned selected element(s).
  console.log(array);
  // shows [1, 2, 3, 4, 5], original array remains intact.

  var array4 = [1, 2, 3, 4, 5];
  console.log(array4.splice(2));
  // shows [3, 4, 5], returned removed item(s) as a new array object.

  console.log(array4);
  // shows [1, 2], original array altered.

  var array3 = [6, 7, 8, 9, 0];
  console.log(array3.splice(2, 1));
  // shows [8]

  console.log(array3.splice(2, 0));
  //shows [] , as no item(s) removed.

  /**
   * [test4]
   */

  let ssss = [1, 3, 5, 6, 7, 2, [12, 3, 45, 6], [1, 2, 34, 5], 4, 8];

  let filterTheNumbers = ssss.filter((num) => num < 8);

  console.log("filterTheNumbers", filterTheNumbers);

  let sssssss = ["80", "9", "700", 40, 1, 5, 200, -1, -2];
  sssssss.sort((a, b) => a - b);
  console.log(sssssss);

  return (
    <>
      <SeoTool title="Test" />
      <div className="container">
        <div className="py-4">
          <h1> Test Page </h1>
        </div>
      </div>
    </>
  );
};
