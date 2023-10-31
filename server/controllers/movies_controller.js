import Movie from "../models/movie.js";

class MoviesController{

    static async index(req, res){
        try{
            const movies = await Movie.find()  
            res.json(movies)
        } catch(err){
            res.status(400).json({err})
        }
    }
}

export default MoviesController