/*let coinTossPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
        const isHead = Math.random() > 0.5;
        if( isHead ){
            resolve("Heads");
        } else {
            reject("Tails - ")
        }
    }, 1000)
})

console.log(coinTossPromise)

coinTossPromise.then(result => console.log("resolved", result))
.catch(error => console.log("reject", error))
.finally(() => {
    console.log("Coin toss completed."); // Always executed
  });

*/
/*

WIthour delays
let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve('Cleaned The Room');
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' then removed Garbage');
  });
};

let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' then won Icecream');
  });
};

cleanRoom().then(function(result){
  return removeGarbage(result);
}).then(function(result){
  return winIcecream(result);
}).then(function(result){
  console.log('finished ' + result); // Logs the final message after all promises are resolved
})*/
/*
with delays
let cleanRoom = function() {
    return new Promise(function(res) {
        setTimeout(() => res('Room is cleaned '), 1000);
    });
};

let CollectGarbage = function(message) {
    return new Promise(function(res) {
        setTimeout(() => res(message + 'Garbage is Collected '), 1000);
    });
};

let WinIcecreaem = function(message) {
    return new Promise(function(res) {
        setTimeout(() => res(message + 'you won the ice cream'), 1000);
    });
};

cleanRoom()
    .then(CollectGarbage)
    .then(WinIcecreaem)
    .then(function(result) {
        console.log('Finished ' + result);
    });
*/



let cleanRoom = function() {
  return new Promise(function(resolve, reject) {

    if( Math.random() < 0.5 ) {
        resolve('Cleaned The Room');
    } else {
        reject(' failed to clean the room')
    }
    
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {

    if( Math.random() < 0.5 ) {
       resolve(message + ' then removed Garbage');
    } else {
        reject(' failed to Pick Garbage')
    }
    
  });
};

let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' then won Icecream');
  });
};

cleanRoom().then(function(result){
  return removeGarbage(result);
}).then(function(result){
  return winIcecream(result);
}).then(function(result){
  console.log('finished ' + result); // Logs the final message after all promises are resolved
}).catch(function(error){
    console.log(error)
})