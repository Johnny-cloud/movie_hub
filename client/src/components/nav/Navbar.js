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
                    <Link to={'/action'} onClick={setGenre} id="action"><i class="bi bi-person-walking"></i> Action</Link>
                    <Link to={'/comedy'} onClick={setGenre} id="comedy"><i class="bi bi-emoji-grin"></i> Comedy</Link>
                    <Link to={'/thriller'} onClick={setGenre} id="thriller"><i class="bi bi-film"></i> Thriller</Link>
                    <Link to={'/horror'} onClick={setGenre} id="horror"><i class="bi bi-emoji-dizzy"></i> Horror</Link>
                    <Link to={'/scifi'} onClick={setGenre} id="sci-fi"><i class="bi bi-motherboard"></i> Sci-Fi</Link>
                    <Link to={'/romance'} onClick={setGenre} id="romance"><i class="bi bi-heart"></i> Romance</Link>
                    <Link to={'/drama'} onClick={setGenre} id="drama"><i class="bi bi-emoji-surprise"></i> Drama</Link>
                    <Link to={'/new'} onClick={setGenre} id="drama"><i class="bi bi-fire"></i> New</Link>
                    <Link to={'/popular'} onClick={setGenre} id="drama"><i class="bi bi-hand-thumbs-up"></i> Popular</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
    
  )

}

export default Navigation