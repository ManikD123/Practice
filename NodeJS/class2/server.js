const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})

const users =[ 
    { id: 1, name: "user1" },
    { id: 2, name: "user2" },
];

app.get("/users", (req, res) => {
    res.status(200).json({message: " All users", users: users})
})