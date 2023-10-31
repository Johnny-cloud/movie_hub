const fetchMovies = async () => {
    const response = await fetch('/movies')
    if( response.ok ){
        let fetchedMovies = await response.json()
        return fetchedMovies
    }
}

export default fetchMovies