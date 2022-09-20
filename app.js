import express from 'express'
import proxy from 'express-http-proxy'

const port = 3000

const app = express();
const serviceOne = proxy('http://localhost:3000/isalive')

// catch proxy requests in middleware
app.use('/serviceone', serviceOne);


// owh routes
app.get("/isalive", (req, res) =>  {
    res.send("Howdy from the Gateway")
})

app.listen(port)