let http = require('http');
let url = require('url');
require('dotenv').config()

let routes = {
    "POST": () => {
        console.log("Post Request");
    },
    "GET": () => {
        console.log("Get Request");
    }
}

let start = (req,res) => {
    routes[req.method]();
    let param = url.parse(req.url, true);
    console.log(param);
    res.end("Hello It's me");
};

let server = http.createServer(start);

server.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`);
});