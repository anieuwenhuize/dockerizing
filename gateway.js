import express from 'express'
import proxy from 'express-http-proxy'

const port = 3000

const app = express();

var numOfReq = 0;
const engines = [
    'http://altavista.com', 
    'http://www.google.com',
    'http://www.bing.com',
    'https://duckduckgo.com'];

// catch proxy requests in middleware
app.use('/search', proxy( () => {
    
    // round robin
    numOfReq++;

    let count = engines.length;
    let selected = numOfReq % count;

    return engines[ selected ];
} ));

// owh routes
app.get("/isalive", (req, res) =>  {
    res.send("Howdy from the Gateway")
})

app.listen(port)