import React from "react";

const APartice2 = () => {
  class Car {
    constructor(model, name) {
      this.model = model;
      this.name = name;
    }
    start() {
      console.log(this.name);
    }
    end() {
      console.log("Car is stoped");
    }
  }
  class ElectricCar extends Car {
    dashboard() {
      console.log("Dashboard is on");
    }
    start() {
      super.start();
      // super.end();
      // this.dashboard();
    }
  }
  const myCar = new ElectricCar("Ford", "Mustang");
  myCar.start();
  return <div>APartice2</div>;
};

export default APartice2;
