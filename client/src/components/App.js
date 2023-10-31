import {Routes, Route} from 'react-router-dom'
import {Popular, New, Trending, DramaAndComedy} from './movies/'
import Navbar from './nav/Navbar'
import './app.css'

const App = () => {


  return (
    <div className='app'>
        <Navbar />
          <Routes>
            <Route exact path='/popular' element={<Popular />} />
            <Route exact path='/new' element={<New />} />
            <Route exact path='/trending' element={<Trending />} />
            <Route exact path='/dramaAndComedy' element={<DramaAndComedy />} />
          </Routes>
    </div>
  )
}

export default App