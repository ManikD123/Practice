const p = new Promise((resolve, reject) => {
    resolve("Promise resolved")
})

function fetchData(){
    p.then((res) => console.log(res))
}

async function fetchData(){
    return p;
}

const dataPromise = fetchData()
console.log(dataPromise);

dataPromise.then((res)=> console.log(res))

//console.log(dataPromise);

