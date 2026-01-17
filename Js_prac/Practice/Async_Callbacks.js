/*const multiply = (a,b) => {
    a * b; }
console.log(multiply(4,5));
*/
const task = () => {
    console.log("task 1")
}

const heavyTask = () => {
    console.log("HEavy task started..")
    const start = Date.now();
    console.log(new Date())

    while (Date.now() - start < 3000 ){
        // 3 sec elapsed
    }
    console.log("Heavy task Done")
}

const heavyTaskAsync = () => {
    console.log("Heacy task async started...")
        
    setTimeout(function(){
        console.log("Hi")
    }, 4000)
}

const task2 = () => {
    console.log("task2")
}


task();
heavyTaskAsync();
heavyTask();
task2();
