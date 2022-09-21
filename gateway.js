import express from 'express'
import proxy from 'express-http-proxy'

const port = 3000

const app = express();
const serviceOne = proxy('http://[::1]:3001/isalive')

// catch proxy requests in middleware
app.use('/search', proxy('www.google.com'));
app.use('/serviceone', proxy('http://[::1]:3001/isalive'));


// owh routes
app.get("/isalive", (req, res) =>  {
    res.send("Howdy from the Gateway")
})

app.listen(port)