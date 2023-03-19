import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation} from "react-router-dom";
import { useNavigate} from "react-router-dom"
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
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleLinkClick = () => {
    if (show) {
      setShow(false);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" style={{ paddingRight: "5%", paddingLeft: "1%" }}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="Logo"
              className="logo"
              style={{ height: "60px", width: "auto" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow}/>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id="offcanvasNavbarLabel"
                style={{
                  paddingLeft: "3%",
                }}
              >
                Sentitube
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
              <Nav
                className="justify-content-end flex-grow-1 pe-3 navlink"
                style={{ fontSize: "110%" }}
              >
                <Nav.Link
                  
                  as={Link}
                  to="/"
                  style={{
                    color: location.pathname === "/" ? "red" : "",
                    paddingLeft: "3%",
                  }}
                  onClick={handleLinkClick}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/TryItOut"
                  style={{
                    color: location.pathname === "/TryItOut" ? "red" : "",
                    paddingLeft: "3%",
                  }}
                  onClick={handleLinkClick}
                >
<<<<<<< Updated upstream
                  Try SentiTube
=======
                  Try Sentitube
>>>>>>> Stashed changes
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Contact"
                  style={{
                    color: location.pathname === "/Contact" ? "red" : "",
                    paddingLeft: "3%",
                  }}
                  onClick={handleLinkClick}
                >
                  Contact
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/About"
                  style={{
                    color: location.pathname === "/About" ? "red" : "",
                    paddingLeft: "3%",
                  }}
                  onClick={handleLinkClick}
                >
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
