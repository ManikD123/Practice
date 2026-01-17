// console.log(19);

// let radiusarr = [2,3,4,5,8];

// function circlearea(radius){
//     return Math.PI * radius * radius;
// }

// function circlecircumferance(radius){
//     return 2 * Math.PI * radius;
// }

// function calculate(radiusarr, logic){
//     let result = [];
//     for( let i = 0; i < radiusarr.length; i++ ){
//         result.push(logic(radiusarr[i]))
//     }
//     return result;
// }

// let finalAreas = calculate(radiusarr, circlearea);
// console.log(finalAreas)

// let finalCircumferences = calculate(radiusarr, circlecircumferance);
// console.log(finalCircumferences)


// let squarearray = radiusarr.map(function(num){
//     return num * num;
// })
// console.log(squarearray)


// async function fetchData(){
//     return 'data';
// }

// const datapromise = fetchData()
// console.log(datapromise)

// datapromise.then((res) => console.log(res))

// // -------------------

// const p = new Promise((resolve, reject) => {
//     resolve('Promise Resolved')
// })

// async function handlepromise() {
//     const val = await p
//     console.log(val)
// }

// handlepromise()

// function fetchdata(){
//     p.then((res) => console.log(res))
// }

// fetchdata()


// setTimeout(function(){
//     console.log("sonali")
// }, 2000)


let globalVar = "Global";

function outer() {
  let outerVar = "Outer";

  function inner() {
    let innerVar = "Inner";

    console.log(innerVar); // Inner
    console.log(outerVar); // Outer
    console.log(globalVar); // Global
  }

  inner();
}

outer();


function createGreeting(name) {
  return function greet() {
    console.log("Hello " + name);
  };
}

const greetManik = createGreeting("sonali");

greetManik(); // Hello Manik

function printName(cb){
    console.log('Shikhar')
    // calling received callback function
    cb()
}
function printLastName(){
    console.log('Singh')
}
function printAge(){
    console.log(24)
}
printName(printLastName) 
printName(printAge) 

let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data fetched successfully");
  } else {
    reject("Error fetching data");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));



  const readDiv = document.querySelector('#mydiv');

  readDiv.addEventListener('click', (e) => {
    // readDiv.classList.add('highlight')
    console.log(e)
    console.log(e.target)
    console.log(e.type)
    console.log(e)
    readDiv.classList.remove('content')

    if(readDiv.classList.contains('content')){
      console.log("div has content")
    } else {
      console.log('dont have content')
    }
  })