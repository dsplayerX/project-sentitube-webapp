import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from 'react-router-dom';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/senti_logo.png";

function NavBar() {
  const location = useLocation();

  return (
    <>
      <Navbar expand="lg" style={{paddingRight:"5%", paddingLeft:"1%"}}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Sidebar
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 navlink" style={{fontSize:"110%" }}>
                <Nav.Link as={Link} to="/" style={{ color: location.pathname === '/' ? 'red' : '' }}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/TryItOut" style={{ color: location.pathname === '/TryItOut' ? 'red' : '' , paddingLeft:"3%"}}>
                  TryItOut
                </Nav.Link>
                <Nav.Link as={Link} to="/Contact" style={{ color: location.pathname === '/Contact' ? 'red' : '' , paddingLeft:"3%"}}>
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to="/About" style={{ color: location.pathname === '/About' ? 'red' : '' , paddingLeft:"3%"}}>
                  About
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
