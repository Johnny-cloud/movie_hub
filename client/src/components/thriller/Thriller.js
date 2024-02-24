import GenreDisplay from "../genre_display/GenreDisplay"

const Thriller = () => {

    const landingMovie = {
        name: "Anabelle", 
        image: "https://m.media-amazon.com/images/M/MV5BNWE3Mzk4MzMtMjc2NC00N2I0LWE5NWMtM2I1YTA3YzE1M2RmXkEyXkFqcGdeQXVyNDYzNjU3ODM@._V1_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BZWFmNjVhNGItOTJmMC00MzZmLTk4ZTktNmJiMDRkOWJmZTI5XkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg",
        description: "",
        runtime: 198,
        release_year: 2020,
        rating: 7.2,
        category: "thriller"
    }

  return (
    <GenreDisplay landingMovie={landingMovie} />
  )
}

export default Thriller