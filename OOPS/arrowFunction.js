console.log("Scenario 1")
const fn = () => {
  console.log(this); // {}
};

fn();

console.log("Scenario 2")
const obj = {
    a: 12,
    fn: () => {
        console.log(this);
    }
}
obj.fn();

console.log("Scenario 3")
const obj1 = {
    a: 12,
    fn: () => {
        console.log(this);
        const nestedFunc = () => {
            console.log(this); // {}
        }
    }
}
obj1.fn();

console.log("Scenario 4 -- using the function")
const obj3 = {
  b: 13,
  fn: function () {
    console.log(this); // obj3
    const nestedFunc = () => {
      console.log(this); // obj3
    };
    nestedFunc();
  },
};

obj3.fn();