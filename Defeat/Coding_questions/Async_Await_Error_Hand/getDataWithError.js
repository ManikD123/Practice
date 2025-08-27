// Q18. Write an async function getDataWithError() that 
// rejects with "Failed to fetch" and handle it using try/catch.

// Q18 Template
async function getDataWithError() {
   // your code here
   throw new Error("Failed to fetch");
}

(async () => {
   try {
      let data = await getDataWithError();
      console.log(data);
   } catch (err) {
      console.error(err); // Expected: Failed to fetch
   }
})();
