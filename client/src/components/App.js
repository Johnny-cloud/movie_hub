import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './home/Home'
import Navbar from './nav/Navbar'
import './app.css'
import AppContext from './AppContext'
import VideoPlay from './video_play/VideoPlay'
import GenreDisplay from './genre_display/GenreDisplay'
import movies from './assets/Constants'
import Footer from './footer/Footer'
import Action from './action/Action'
import Comedy from './comedy/Comedy'
import Drama from './drama/Drama'
import Horror from './horror/Horror'
import Romance from './romance/Romance'
import Scifi from './scifi/Scifi'
import Thriller from './thriller/Thriller'

const App = () => {

  const [selectedMovie, setSelectedMovie] = useState(null)
  const [allMovies, setAllMovies] = useState(movies)
  // const apiRoute = "https://movie-hub-backend.vercel.app"
  // const apiRoute = "http://localhost:8000"
  const [selectedGenre, setSelectedGenre] = useState(null)

  // const fetchMovies = async () => {
  //   const response = await fetch(`${apiRoute}/movies`, {method: "GET", credentials: "include"})

  //   if(response.ok){
  //     const movies = await response.json()
  //     setAllMovies(movies)
  //   }
  // }

  // useEffect(() => {
  //   fetchMovies()
  // }, [])

  return (
    <div className='app'>
      <AppContext.Provider value={{selectedGenre, setSelectedGenre, selectedMovie, setSelectedMovie, allMovies}}>
        
        <Navbar />
        
        <div className='main-content'>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/action' element={<Action />} />
                <Route exact path='/comedy' element={<Comedy />} />
                <Route exact path='/drama' element={<Drama />} />
                <Route exact path='/horror' element={<Horror />} />
                <Route exact path='/romance' element={<Romance />} />
                <Route exact path='/scifi' element={<Scifi />} />
                <Route exact path='/thriller' element={<Thriller />} />
                <Route exact path='/video-play' element={<VideoPlay />} />
                <Route exact path='/genre-display' element={<GenreDisplay />} />
            </Routes>
            <Footer />
        </div>
        
        </AppContext.Provider>
          
    </div>
  )
}

export default App