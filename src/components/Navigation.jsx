import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/css/Nav.css'
import carswipeLogo from '../assets/images/carswipe-logo-active.png'

function Navigation() {
  return (
    <div className="navContainer">
      <Navbar collapseOnSelect expand="lg" variant="light">
          <Navbar.Brand className="logoContainer">
            <div className="imgContainer">
              <img src= {carswipeLogo} style= {{width: '180px'}}alt="Carswipe Logo"/>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="linkContainer" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-around blueBg">
            <div>{/* för spacing i navbar :) */}</div>
            <div className="linkContainer hamburgerMenu">
              <Nav className="text-end">
                <Nav.Link><span>Köp bil</span></Nav.Link>
                <Nav.Link><span>Sälj bil</span></Nav.Link>
                <Nav.Link><span>Så funkar det</span></Nav.Link>
                <Nav.Link><span>Pris</span></Nav.Link>
                <Nav.Link><span>Kontakt</span></Nav.Link>
              </Nav>
            </div>
            <Nav className="text-end loginContainer">
                <Nav.Link><span className="login">Logga in</span></Nav.Link>
                <Nav.Link><span className="annons">+ Skapa annons</span></Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation