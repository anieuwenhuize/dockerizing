import express from 'express'

const port = 3000

const app = express();


app.get("/isalive", (req, res) =>  {
    res.send("Alive and kickin'")
})

app.listen(port)