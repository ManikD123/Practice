

/*function main(str){
    let character = str.split("");
    let count = 0;
    console.log(character)
    for( let i = 0; i < character.length; i++ ){
        if( character[i] === 'a' ||  character[i] === 'e' || character[i] === 'i' || character[i] === 'o' || character[i] === 'u' || 
            character[i] === 'A' ||  character[i] === 'E' || character[i] === 'I' || character[i] === 'O' || character[i] === 'U' )
            count++;
    }
    return count;
}

let str = "manik DOlai";
let ans = main(str);
console.log(ans)
*/
function parent(){
    var a = 10;
    function child(){
        console.log(a)
        return child
    }
}
let functionReceived = parent()
console.log(functionReceived)

functionReceived()
