// // calc area, circumference, diameter for these radius.
// let radiusArr = [1, 2, 3, 4];

// function calculateArea(radiusArr) {
//     let result = [];
//     for (let i = 0; i < radiusArr[i]; i++) {
//         result.push(3.14 * radiusArr[i] * radiusArr[i])
//     }
//     return result;
// }
// const finalAreas = calculateArea(radiusArr);
// console.log("Final areas ==", finalAreas)

// function calculateCircumference(radiusArr) {
//     let result = [];
//     for (let i = 0; i < radiusArr[i]; i++) {
//         result.push(2 * Math.PI * radiusArr[i])
//     }
//     return result;
// }
// const finalCircum = calculateCircumference(radiusArr);
// console.log("Final circumference ==", finalCircum)

// function calculateDiameter(radiusArr) {
//     let result = [];
//     for (let i = 0; i < radiusArr[i]; i++) {
//         result.push(2 * radiusArr[i])
//     }
//     return result;
// }
// const finalDiameter = calculateDiameter(radiusArr);
// console.log("Final diameter ==", finalDiameter)


// function circleArea(radius) {
//     return Math.PI * radius * radius
// }

// function circleCircumference(radius) {
//     return 2 * Math.PI * radius
// }
// function circleDiameter(radius) {
//     return 2 * radius
// }


// function calculate(radiusArr, logicFn) {
//     let result = [];
//     for (let i = 0; i < radiusArr.length; i++) {
//         const value = logicFn(radiusArr[i])
//         console.log("value", value)
//         console.log("logicFn", logicFn)
//         result.push(value)
//     }
//     return result
// }

// console.log(calculate(radiusArr, circleArea))
// // console.log(calculate(radiusArr, circleCircumference))
// // console.log(calculate(radiusArr, circleDiameter))


function fun() {
    let a = 2
    if (true) {
        let a = 1;
        console.log(a) // 1
    }
    console.log(a); // error
}
fun()

// console.log(a, 'line 72'); // ReferenceError: a is not defined
function fun2() {
    console.log(a, 'line 73')
    if (true) {
        var a = 1;
        console.log(a)
    }
    console.log(a)
}
fun2()