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
    <div className="navbar-container">
      <Navbar variant="dark" expand="lg" expanded={expanded}>
        <Navbar.Brand><h3>MOVIE HUB</h3></Navbar.Brand>
          <Container>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}></Navbar.Toggle>
            <Navbar.Offcanvas>
              <Offcanvas.Header><i class="bi bi-x-lg" onClick={hideMenu}></i></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto">
                  <Link to={'/'} onClick={hideMenu}><i class="bi bi-house"></i> Home</Link>
                    <h2>GENRES</h2>
                    <Link to={'/genre-display'} onClick={setGenre} id="action"><i class="bi bi-person-walking"></i> Action</Link>
                    <Link to={'/genre-display'} onClick={setGenre} id="comedy"><i class="bi bi-emoji-grin"></i> Comedy</Link>
                    <Link to={'/genre-display'} onClick={setGenre} id="thriller"><i class="bi bi-emoji-astonished"></i> Thriller</Link>
                    <Link to={'/genre-display'} onClick={setGenre} id="horror"><i class="bi bi-emoji-dizzy"></i> Horror</Link>
                    <Link to={'/genre-display'} onClick={setGenre} id="sci-fi"><i class="bi bi-motherboard"></i> Sci-Fi</Link>
                    <Link to={'/genre-display'} onClick={setGenre} id="romance"><i class="bi bi-heart"></i> Romance</Link>
                    <Link to={'/genre-display'} onClick={setGenre} id="drama"><i class="bi bi-emoji-surprise"></i> Drama</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
    
  )

}

export default Navigation