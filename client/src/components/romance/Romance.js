import GenreDisplay from "../genre_display/GenreDisplay"

const Romance = () => {

    const landingMovie = {
        name: "Romantic", 
        image: "https://m.media-amazon.com/images/M/MV5BOTZmMjk4NDYtYTA0Yy00MmY1LTk3ZTAtZWU1NjU0ZDM4MjUwXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
        horizontalImage: "https://image-resizer-cloud-api.akamaized.net/image/4B3B52DC-0B29-4C28-A0AB-1819FEB3B27C/0-16x9.jpg?width=1920&updatedTime=2024-02-16T10:58:59Z&dt=Web",
        description: "",
        runtime: "",
        release_year: 2020,
        rating: 7.7,
        category: "romance"
    }

  return (
    <GenreDisplay landingMovie={landingMovie} />
  )
}

export default Romance