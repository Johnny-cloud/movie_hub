import { Link } from "react-router-dom"
import './navbar.css'

const Navbar = () => {
  return (
    <div className="nav">
          <Link to='/popular'><i class="bi bi-star"></i> Popular</Link>
          <Link to='/new'><i class="bi bi-fire"></i> New&Hot</Link>
          <Link to='/trending'><i class="bi bi-graph-up-arrow"></i>  Trending </Link>
        <div className="dropdown-menu">
           <Link>Genres<i class="bi bi-justify"></i></Link>
          <div className="dropdown-items">
            <Link to='sci-fi'>Sci-fi</Link>
            <Link to='action'>Action</Link>
            <Link to='thriller'>Thriller & Horror</Link>
            <Link to='romance'>Romance</Link>
            <Link to='dramaAndComedy'>Drama & Comedy</Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar