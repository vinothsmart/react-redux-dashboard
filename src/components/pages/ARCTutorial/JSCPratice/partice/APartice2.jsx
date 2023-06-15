import React from "react";

const APartice2 = () => {
  class Car {
    constructor(name, model) {
      this.name = name;
      this.model = model;
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
      super.end();
      this.dashboard();
    }
  }
  const myCar = new ElectricCar("Ford", "Mustang");
  myCar.start();
  return <div>APartice2</div>;
};

export default APartice2;
