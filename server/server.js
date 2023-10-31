import express from 'express'
import connectToDB from './DBConnection.js'
import Seeder from './seeder.js'
import movies_router from './routes/movies_router.js'


const app = express()


app.use(express.json())
app.use('/movies', movies_router)
app.get('/', (req, res) => {
    res.send('<h1>Welcome to movie hub</h1>')
})

connectToDB()
// Seeder.seedData()
app.listen(3000, () => console.log("Listening on port http://localhost:3000"))