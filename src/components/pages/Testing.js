import { SeoTool } from "../elements";

export const Testing = () => {
  // Function Curring
  //  add (1,2) => 3
  //  add (1)(2) => 3 how to write the functon

  // normal func
  function add(a, b) {
    return a + b;
  }
  console.log(add(1, 2));

  // curring func
  function curringAdd(a) {
    // a is accesing from outer scope
    // closure applided for value of a
    return function (b) {
      return a + b;
    };
  }
  console.log(curringAdd(1)(2));

  return (
    <>
      <SeoTool
        title="Testing"
        keywords="Vinoth App React Redux Dashboard"
        description="Vinoth App React Redux Dashboard"
      />
      <div className="container">
        <div className="py-4">
          <h1> Testing Page</h1>
        </div>
      </div>
    </>
  );
};
