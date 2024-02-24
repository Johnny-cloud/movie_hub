import GenreDisplay from "../genre_display/GenreDisplay"

const Comedy = () => {
    
    const landingMovie = {
        name: "White Chicks", 
        image: "https://m.media-amazon.com/images/M/MV5BMTY3OTg2OTM3OV5BMl5BanBnXkFtZTYwNzY5OTA3._V1_FMjpg_UX1000_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BODRkZjU3ODAtMTAyZS00YjhhLWEzOGYtODg5MmRkYWExMzU2XkEyXkFqcGdeQWpnYW1i._V1_FMjpg_UX1000_.jpg",
        description: "",
        runtime: 205,
        release_year: 2020,
        rating: 7.7,
        category: "comedy"
    }

  return (
    <GenreDisplay landingMovie={landingMovie} />
  )
}

export default Comedy