"use strict";

// Scenario 1
console.log("Scenario 1:");
console.log(this); // Window function

// scanario 2
const obj = {
  a: 12,
  fn: function () {
    console.log(this); // obj
  },
};

obj.fn();

// Scenario 3

const obj2 = {
  b: 13,
  fn: function () {
    console.log(this); // obj2
    const nestedFunc = function () {
      console.log(this); // undefined
    };
    nestedFunc();
  },
};

obj2.fn();