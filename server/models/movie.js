import { MongoGridFSChunkError } from "mongodb";
import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name: String,
    category: String,
    trending: Boolean,
    image: String,
    popular: Boolean,
    release_year: Number,
    runtime: Number,
    rating: Number,
    description: String,
})

const Movie = mongoose.model("Movie", movieSchema)

export default Movie