
import Navbara from '../../layout/Navbar/Navbara'
import Footer from '../../layout/Footer/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../Style/Site.css'
import './equipe.css'

export const Equipe = () => {
  return (
    <div>
      <Navbara />
      <div className='cards'>
        <div class="card1">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/src/Componentes/pages/img/kezia.jfif" width="300" height="200" />
            <Card.Body>
              <Card.Title>Kezia</Card.Title>
              <Card.Text>
                <i>Gestora de Enganjamento</i><br></br>

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
              </Card.Text>
              <Button variant="primary">Contato</Button>
            </Card.Body>
          </Card>
        </div>
      </div>



      <Footer />
    </div>

  )
}