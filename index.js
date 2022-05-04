import express from 'express'
import cors from 'cors'
import { getPets } from './src/pets.js'

const app = express() // initialize express
app.use(cors())
app.use(express.json())  // we tell The server to exp Json file


app.get('/pets', async (req, res) => {
    try {
        const pets = await getPets()
        res.status(200).send(pets)  
    } catch (error) {
        res.status(500).send(error)  
    } 
})
const PORT = 3030

app.listen( PORT, () => {
    console.log(`We be listen on port http://localhost:${PORT}`)
})

