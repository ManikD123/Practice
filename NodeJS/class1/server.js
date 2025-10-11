const http = require("http");
const server = http.createServer((req, res) => {
    /// handle code
    res.setHeader("Content-Type", "application/json");
    const jsonData =  {
        message: "Hello World",
        date: new Date(),
    };
    const jsonResponse = JSON.stringify(jsonData);
    res.write(jsonResponse);
    res.end();
});

const port = 3000;
const host= "localhost";

server.listen(port, host, () => {
    console.log(`server is listening on http://${host}:${port}`);
});
