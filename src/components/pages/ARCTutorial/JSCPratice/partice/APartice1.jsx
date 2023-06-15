const APartice1 = () => {
  class Car {
    constructor(model, name) {
      this.model = model;
      this.name = name;
    }
    start() {
      console.log("Name of the car is " + this.name);
    }
  }

  const car1 = new Car("BMW", "X5");
  car1.start();

  return (
    <>
      <h1>JS Challange 1</h1>
      <p>Open console to see the result</p>
    </>
  );
};

export default APartice1;
