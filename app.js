import { engine } from 'express'

const port = 3001

const app = engine();


app.get("/isalive", (req, res) =>  {
    res.send("Alive and kickin'")
})

app.listen(port)