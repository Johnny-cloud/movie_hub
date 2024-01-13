import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './DBConnection.js'
import Seeder from './seeder.js'
import movies_router from './routes/movies_router.js'
import cors from 'cors'

const app = express()

dotenv.config()

const port = process.env.PORT || 8000

app.set("trust proxy", 1)

app.use(cors({
    credentials: true,
    // origin: "http://localhost:3000",
    origin: "https://movie-hub-mi.vercel.app"
}))

app.use(express.json())

app.use('/movies', movies_router)

app.get('/', (req, res) => {
    res.send('<h1>Welcome to movie hub</h1>')
})

connectToDB()

// Seeder.seedData()

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`))