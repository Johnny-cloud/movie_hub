import { Link } from "react-router-dom"
import './navbar.css'
import {Navbar, Nav, Container, Offcanvas} from 'react-bootstrap'
import { useState, useContext } from "react"
import AppContext from "../AppContext"

const Navigation = () => {

  const [expanded, setExpanded] = useState("")
  const {setSelectedGenre} = useContext(AppContext)

  const hideMenu = () => {
    setExpanded(false)
  }

  const setGenre = (event) => {
    setSelectedGenre(event.target.id)
    hideMenu()
  }

  return(
    <Navbar fixed="top" variant="dark" expand="lg" expanded={expanded}>
    <Navbar.Brand>Movie Hub</Navbar.Brand>
      <Container>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}></Navbar.Toggle>
        <Navbar.Offcanvas>
          <Offcanvas.Header><i class="bi bi-x-lg" onClick={hideMenu}></i></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              <Link to={'/'}>Home</Link>
              <div className="my-dropdown">
              <Link>Genres</Link>
              <div className="my-dropdown-menu">
                <Link to={'/genre-display'} onClick={setGenre} id="action">Action</Link>
                <Link to={'/genre-display'} onClick={setGenre} id="comedy">Comedy</Link>
                <Link to={'/genre-display'} onClick={setGenre} id="thriller">Thriller</Link>
                <Link to={'/genre-display'} onClick={setGenre} id="horror">Horror</Link>
                <Link to={'/genre-display'} onClick={setGenre} id="sci-fi">Sci-Fi</Link>
                <Link to={'/genre-display'} onClick={setGenre} id="romance">Romance</Link>
                <Link to={'/genre-display'} onClick={setGenre} id="drama">Drama</Link>
              </div>
            </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )

}

export default Navigation