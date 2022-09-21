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

    // round robin
const getSearchEngine = () => {

    numOfReq++;

    var count = engines.length;
    var selected = numOfReq % count;

    return engines[ selected ];
}

// catch proxy requests in middleware
app.use('/search', proxy(getSearchEngine));

// owh routes
app.get("/isalive", (req, res) =>  {
    res.send("Howdy from the Gateway")
})

app.listen(port)