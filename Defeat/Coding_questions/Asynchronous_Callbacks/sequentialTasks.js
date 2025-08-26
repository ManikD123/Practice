// Write a function sequentialTasks(task1, task2, callback) where 
// both task1 and task2 are functions that accept callbacks. 
// Run task1, then after it finishes, run task2, and finally call the callback.

// Q4 Template
function sequentialTasks(task1, task2, callback) {
   // your code here   
   task1(() => {
    task2(() => {
        callback();
    });
   });

}

// Validation
const task1 = (cb) => setTimeout(() => { console.log("Task1"); cb(); }, 1000);
const task2 = (cb) => setTimeout(() => { console.log("Task2"); cb(); }, 1000);

sequentialTasks(task1, task2, () => console.log("All done"));
// Expected: Task1 → Task2 → All done

