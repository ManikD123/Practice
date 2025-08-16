/*let myRadiusArray = [1,2,3,4,5];

function circumferance(radius){
    return 2 * Math.PI * radius;
}

function area(radius){
    return Math.PI * radius * radius;
}

function diameter(radius){
    return Math.PI * radius;
}

function calculate( radiusArr, logic ){
    let ans = [];
    for( let i = 0; i < radiusArr.length; i++){
        ans.push(logic(radiusArr[i]));
    }
    return ans;
}

let finalCircumferance = calculate(myRadiusArray,circumferance );
console.log(finalCircumferance);
let finalarea = calculate(myRadiusArray,area );
console.log(finalarea);
let finalDiameter = calculate(myRadiusArray,diameter );
console.log(finalDiameter);*/


let arr = [1,2,3,4,5];
/* MAP Function
let mappe_array = arr.map(function(num){
    return num * 3;
})
console.log(mappe_array)

// FIlter program
let even_Values = arr.filter(function(num) {
    return num % 2 === 0;
})
console.log(even_Values)

*/

let totalSum = arr.reduce(function(acc, num){
    acc = acc + num;
    return acc;
})
console.log(totalSum)

setTimeout
