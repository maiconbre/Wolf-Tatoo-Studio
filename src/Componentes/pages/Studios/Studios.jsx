
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
    <div class="card1">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/src/Componentes/pages/img/tatuador3.jpeg" width="300" height="200" />
      <Card.Body>
        <Card.Title>Leonardo</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div class="buttom1"><Button variant="primary">Orçamento</Button></div>
      </Card.Body>
    </Card>
   </div>
   <div class="card2">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/src/Componentes/pages/img/tatuador2.jpeg" width="300" height="200" />
      <Card.Body>
        <Card.Title>Bruno</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Orçamento</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="card3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/src/Componentes/pages/img/tatuador1.jpeg" width="300" height="200" />
      <Card.Body>
        <Card.Title>Gabi</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Orçamento</Button>
      </Card.Body>
    </Card></div>
    </div>
    
    
  );
}

