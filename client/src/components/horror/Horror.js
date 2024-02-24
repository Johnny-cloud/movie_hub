import GenreDisplay from "../genre_display/GenreDisplay"

const Horror = () => {
    
    const landingMovie = {
        name: "Get Out", 
        image: "https://m.media-amazon.com/images/M/MV5BMmM3NGVkOGEtNzdlYy00MWNmLWIwZWYtM2JmNWMyMjI4N2U0XkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_FMjpg_UX1000_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BMTUxMjEzNzE1NF5BMl5BanBnXkFtZTgwNDYwNjUzMTI@._V1_.jpg",
        description: "",
        runtime: 185,
        release_year: 2020,
        rating: 7.5,
        category: "horror"
    }

  return (
   <GenreDisplay landingMovie={landingMovie} />
  )
}

export default Horror