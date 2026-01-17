// calc area, circumference, diameter for these radius.
/*

function calculateArea(radiusArr){
    let result = [];
    for( let i = 0; i < radiusArr[i]; i++){
        result.push(3.14 * radiusArr[i] * radiusArr[i])
    }
    return result;
}

let radiusArr = [1, 2, 3, 4];

// Method 1 --> console.log(calculateArea(radiusArr));

// Method 2
const finalAreas = calculateArea(radiusArr);
console.log("Final areas ==", finalAreas)

function calculateCircumference( radiusarr ){
    let result = [];
    for( let i = 0; i < radiusArr[i]; i++ ){
        result.push( 2 * 3.14 * radiusArr[i]);
    }
    return result;
}

const finalcircumferance = calculateCircumference(radiusArr);
console.log("Final Circumferance ==", finalcircumferance)

function calculateDiameter(radiusArr) {
    let result = [];
    for( let i = 0; i < radiusArr[i]; i++ ){
        result.push( 2 * radiusArr[i] );
    }
    return result;
}

const finaldiameter = calculateDiameter(radiusArr)
console.log("Final Diameter ==", finaldiameter)


*/


// Using the Login fn for the above code

function circleArea(radius){
    return 3.14 * radius * radius;
}

function circleCircumference(radius){
    return 2 * 3.14 * radius ;
}

function circleDiameter(radius){
    return 2 * radius ;
}

function calculate (radiusArr, logicFn){
    let result = [];
    for( let i = 0; i < radiusArr[i]; i++ ){
        const value = logicFn(radiusArr[i])
        result.push(value)
    }
    return result
}

let radiusArr = [1, 2, 3, 4];
console.log("calculated Area ==> ", calculate (radiusArr, circleArea ))
console.log("calculated Circumference ==> ",  calculate (radiusArr, circleCircumference ))
console.log("calculated Diameter ==> ",  calculate (radiusArr, circleDiameter ))