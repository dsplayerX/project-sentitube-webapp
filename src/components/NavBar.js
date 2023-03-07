import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl,Button } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import logo from './Icons&Images/2ng.png';

function Navbar_SentiTube() {
  return (
      <>  
        <Navbar bg="light" expand="lg">  
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
                <Offcanvas.Title id="offcanvasNavbarLabel">Sidebar</Offcanvas.Title>  
            </Offcanvas.Header>  
            <Offcanvas.Body>  
                <Nav className="justify-content-end flex-grow-1 pe-3">  
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/TryItOut">TryItOut</Nav.Link>
                    <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                    <Nav.Link as={Link} to="/About">About</Nav.Link>    
                </Nav>  
            </Offcanvas.Body>  
            </Navbar.Offcanvas>  
        </Container>  
        </Navbar>  
    </>  
  );
}

export default Navbar_SentiTube;