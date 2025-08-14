//console.log("manik")

let val = "Hello world"
let ans = reverse_String(val);
console.log(ans)
function reverse_String(val) {
    let set = val.split(" ").reverse().join(" ");
    console.log(set);
    return set.split("").reverse().join("");
}

