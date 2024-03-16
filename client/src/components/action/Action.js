import GenreDisplay from '../genre_display/GenreDisplay'

const Action = () => {
    const landingMovie = {
        name: "John Wick", 
        image: "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_FMjpg_UX1000_.jpg",
        horizontalImage: "https://m.media-amazon.com/images/M/MV5BOWEwNDRmMzQtYWQzZC00MGRjLWEyYzMtZGQwNWRkNTNmNTQ4XkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg",
        description: "",
        runtime: 200,
        release_year: 2020,
        rating: 8.7,
        category: "action"
    }
    return (
        <GenreDisplay landingMovie={landingMovie} />
      )
}

export default Action