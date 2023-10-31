import express from 'express'
import MoviesController from '../controllers/movies_controller.js'

const movies_router = express.Router()

movies_router.get('/', MoviesController.index)

export default movies_router