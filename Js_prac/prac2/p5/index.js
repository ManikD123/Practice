console.log(10)

var toys = {
    toy1: {name: "teddyBear", color: "Brown"},
    toy2: {name: "teddyBear2", color: "Brown2"},
    toy3: {name: "teddyBear3", color: "Brown3"},
};


var toyJson = JSON.stringify(toys);

console.log(toyJson)


var unpackedJson = JSON.parse(toyJson)
console.log(unpackedJson)