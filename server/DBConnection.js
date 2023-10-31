import mongoose from "mongoose";

const connectToDB = () => {
    mongoose.connect('mongodb://localhost/movie_hub')
    const db = mongoose.connection
    db.on('error', (error) => console.log(`Error! Connection to db not successful ${error}`))
    db.once('open', () => console.log('Connected to db successfully!'))
}

export default connectToDB