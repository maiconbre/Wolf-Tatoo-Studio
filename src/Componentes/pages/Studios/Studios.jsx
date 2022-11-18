
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './studios.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Studios = () =>{
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Wolf Tatoo Studio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/agendamentos">Agendamentos</Nav.Link>
            <Nav.Link href="/studios">Studios</Nav.Link>
            <Nav.Link href="/equipe">Equipe</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
    
    
  );
}


