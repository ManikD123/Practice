const task1 = () => {
    console.log("task1")
}
const heavyTask = () => {
    console.log("heavy task started..")
    const start = Date.now(); // epoch time
    console.log(new Date())
    // console.log(start);
    // console.log(+new Date)
    while (Date.now() - start < 3000) {
        // 3s will be elapsed...
    }
    console.log("heavy task end...")
}

const heavyTaskAsync = () => {
    console.log("heavy async task called..")

    console.log("when async settimeput called", new Date())
    setTimeout(function () {
        console.log("Async task done...")
        console.log("inside settimeout function called", new Date())
    }, 4000)

}

const task2 = () => {
    console.log("task2")
}

task1();
heavyTaskAsync();
heavyTask();
task2();
// output
/**
 * task1
heavy async task called..
when async settimeput called 2025-02-24T02:18:08.920Z
heavy task started..
2025-02-24T02:18:08.952Z
heavy task end...
task2
Async task done...
inside settimeout function called 2025-02-24T02:18:12.957Z
 */
