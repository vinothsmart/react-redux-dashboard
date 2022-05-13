import React from "react";

const Part3 = () => {
  // Higher order function (HOF)

  function myfun(arg) {
    arg();
  }

  function myfun() {
    return function () {};
  }

  //function assigned variable
  var myfunction = function () {};

  //object assigned variable
  var obj = {
    myfunction: function () {},
  };

  //array assigned variable
  var arr = [function () {}, function () {}];
  // function called as argument
  arr.map(function (item) {
    console.log(item);
  });

  return <div>Part3</div>;
};

export default Part3;
