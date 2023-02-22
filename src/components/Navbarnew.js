import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from './2ng.png';

function Navbarnew() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/TryItOut">TryItOut</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    
  );
}

export default Navbarnew;