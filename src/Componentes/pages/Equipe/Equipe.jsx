import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './equipe.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Equipe = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Wolf Tatoo Studio</Navbar.Brand>
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
          <Card.Img variant="top" src="/src/Componentes/pages/img/kezia.jfif" width="300" height="200" />
          <Card.Body>
            <Card.Title>Kezia</Card.Title>
            <Card.Text>
              <i>Gestora de Enganjamento</i><br></br>
              Garantir que o grupo está trabalhando bem e que todos estão cumprindo
              suas funções.

            </Card.Text>
            <div class="buttom1"><Button variant="primary">Contato</Button></div>
          </Card.Body>
        </Card>
      </div>
      <div class="card2">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/src/Componentes/pages/img/maicon.jfif" width="300" height="200" />
          <Card.Body>
            <Card.Title>Maicon</Card.Title>
            <Card.Text>
              <i> Co-Facilitador</i><br></br>
              Direciona as atividades nos grupos e as ações para o projeto.
            </Card.Text>
            <Button variant="primary">Contato</Button>
          </Card.Body>
        </Card>
      </div>
      <div class="card3">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/src/Componentes/pages/img/tamires.jfif" width="300" height="200" />
          <Card.Body>
            <Card.Title>Tamires</Card.Title>
            <Card.Text>
              <i>Colaboradora l</i> <br></br>
              Garantir o cumprimento das funções e ações designadas.
            </Card.Text>
            <Button variant="primary">Contato</Button>
          </Card.Body>
        </Card></div>
      <div class="card4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/src/Componentes/pages/img/bernardo.jfif" width="300" height="200" />
          <Card.Body>
            <Card.Title><i>Bernardo</i></Card.Title>
            <Card.Text>
              <i>Gestora de Conhecimento</i><br></br>
              Registra e garante a documentação de todo o progresso do grupo.
            </Card.Text>
            <Button variant="primary">Contato</Button>
          </Card.Body>
        </Card></div>
      <div class="card5">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/src/Componentes/pages/img/grazi.jpg" width="300" height="200" />
          <Card.Body>
            <Card.Title><i>Grazi</i></Card.Title>
            <Card.Text>
              Colaboradora ll<br></br>
              Garantir o cumprimento das funções e ações designadas.
            </Card.Text>
            <Button variant="primary">Contato</Button>
          </Card.Body>
        </Card></div>



    </div>

  )
}