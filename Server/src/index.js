const http = require("http");
const getCharById = require("./controllers/getcharById");


const PORT = 3001;

http
    .createServer((req,res) => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          
          if(req.url.includes("/rickandmorty/character")) {
            const id = req.url.split("/").pop();
            getCharById(res,id);
          }
})
    .listen(PORT, "localhost",
            () => { console.log("Server listening on port " + PORT) }
            );