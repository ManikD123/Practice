// Q19. Write an async function runInOrder() that 
// waits for task1, task2, task3 to complete sequentially.

// Q19 Template
async function runInOrder() {
    // your code here
    const task1 = () => new Promise(res => setTimeout(() => { console.log("Task1"); res(); }, 1000))
    const task2 = () => new Promise(res => setTimeout(() => { console.log("Task2"); res(); }, 1000))
    const task3 = () => new Promise(res => setTimeout(() => { console.log("Task3"); res(); }, 1000))

    await task1();
    await task2();
    await task3();
}

runInOrder();
// Expected order: "Task1", "Task2", "Task3"
