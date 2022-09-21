import express from 'express'

const port = 3000

const app = express();


// owh routes
app.get("/isalive", (req, res) =>  {
    res.send("Howdy from the Service")
})

app.listen(port)