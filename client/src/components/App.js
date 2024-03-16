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
import NewMovies from './new_movies/NewMovies'
import PopularMovies from './popular/PopularMovies'

const App = () => {

  const [selectedMovie, setSelectedMovie] = useState(null)
  const [allMovies, setAllMovies] = useState(movies)
  const [selectedGenre, setSelectedGenre] = useState(null)

  

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
                <Route exact path='/new' element={<NewMovies />} />
                <Route exact path='/popular' element={<PopularMovies />} />
            </Routes>
            <Footer />
        </div>
        
        </AppContext.Provider>
          
    </div>
  )
}

export default App