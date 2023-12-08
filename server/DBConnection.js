import mongoose from "mongoose";

const connectToDB = () => {
    let connURL = "mongodb+srv://John:ynnhoj157@cluster0.76ioyjl.mongodb.net/movie_hub?retryWrites=true&w=majority"
    // let localURL = 'mongodb://localhost/movie_hub'
    mongoose.connect(connURL)
    const db = mongoose.connection
    db.on('error', (error) => console.log(`Error! Connection to db not successful ${error}`))
    db.once('open', () => console.log('Connected to db successfully!'))
}

export default connectToDB