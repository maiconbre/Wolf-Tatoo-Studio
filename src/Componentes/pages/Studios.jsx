
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


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
            <Nav.Link href="/agendamento">Agendamento</Nav.Link>
            <Nav.Link href="/studios">Studios</Nav.Link>
            <Nav.Link href="/equipe">Equipe</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/src/Componentes//pages/tatuador1.jpg" width="300" height="200" />
      <Card.Body>
        <Card.Title>Leonardo</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/src/Componentes//pages/tatuador1.jpg" width="300" height="200" />
      <Card.Body>
        <Card.Title>Leonardo</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/src/Componentes//pages/tatuador1.jpg" width="300" height="200" />
      <Card.Body>
        <Card.Title>Leonardo</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    
    
  );
}


