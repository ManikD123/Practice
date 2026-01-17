// // // console.log(this);

// // function a() {
// //   console.log(this);
// // }

// // const obj = {
// //   x: 10,
// //   fn() {
// //     console.log(this);
// //   }
// // };

// // // obj.fn();
// // // a();


// // class MathUtil {
// //   static add(a, b) {
// //     return a + b;
// //   }
// // }

// // // console.log(MathUtil.add(2, 3)); // 5
// // // const obj1 = new MathUtil();
// // // obj1.add(2, 3); //  Error


// // function outer() {
// //   let x = 100;

// //   function inner() {
// //     console.log(x);
// //   }
// //   console.log(x);
// //   inner();
// // }

// // outer();


// let a = 1;

// function first() {
//   let b = 2;

//   function second() {
//     let c = 3;
//     console.log(a, b, c);
//   }

//   second();
// }

// first();


// function createAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = createAdder(5);
// console.log(add5(10));


// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// function sayName() {
//   console.log("My Name is " + this.name);
// }

// const p1 = { name: "mkd" };
// const p2 = { name: "Rahul" };

// function greet(city, country) {
//   console.log(this.name, city, country);
// }

// greet.apply(p1, ["Kolkata", "India"]);

// function outer() {
//   let x = 1;

//   function inner() {
//     x++;
//     console.log(x);
//   };
//   return inner ;
// }

// const fn1 = outer();
// fn1();
// fn1();


// const original = {
//   a: 1,
//   b: { c: 2 }
// };

// const clone = structuredClone(original);
// clone.b.c = 100;

// console.log(original.b.c); // ✅ 2
// console.log(clone.b.c);    // 100

let car = {
    name: "Mercedes",
    color: "White",
  };
  
  function buyCar(price) {
    console.log(`I bought a ${this.color} ${this.name} of ${price} `);
  }


Function.prototype.myCall = function (context = {}, ...args) {
       console.log(this)
       console.log(context)
      console.log(...args)
    if(typeof this !== 'function'){
        throw new Error (this + 'Is not callable')
      }
  
    // context -> car

    
  
    context.myFunction = this; // buyCar
  console.log(this)
       console.log(context)
      console.log(...args)
    context.myFunction(...args);

    
    console.log(this)
       console.log(context)
      console.log(...args)
  };
  
  buyCar.myCall(car, "3000000");

