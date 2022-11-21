
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
      <div className='logo'>
        <img src="https://raw.githubusercontent.com/maiconbre/Wolf-Tatoo-Studio/8e834a70c3176ba2601437dfa3e6e38b00a6428d/src/Componentes/pages/img/logo%20retangular%20fundo%20preto.svg" alt="logo" />
      </div>
      <div className='inicio'><p><i>
        “Nossos artistas são diferenciados, todos eles são de lugares diferentes, mundos diferentes, mas encontraram no nosso espaço um lugar que é para todos, em que o talento,
        a técnica e a liberdade de expressão são exaltados ao máximo atendendo todo tipo de gente.</i></p>
        <br />
        <p>
          Começou como um pequeno estúdio voltado para a área estética em tatuar regiões do corpo que antes traziam sofrimento para as pessoas
          , uma cicatriz pode se transformar numa rosa, num símbolo de força, isso é com o cliente! Mas eles saem felizes, satisfeitos e com a autoestima lá em cima.
          <br />
          <br />Logo, outros tatuadores se identificaram com nosso propósito e hoje temos orgulho de dizer que somos referência em técnicas diferenciadas, mas também fazemos nosso clientes felizes com o tradicional.
          Não importa o que você está procurando, certamente encontrará aqui!
        </p></div>
      <div className='cards'>
        <div className="card1">
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="/src/Componentes/pages/img/kezia.jfif" width="300" height="200" />
            <Card.Body><div className="texto">
              <Card.Title>Kesia</Card.Title>
              <Card.Text>
                <i>Gestora de Enganjamento</i><br></br>


              </Card.Text></div>
              <div className="buttom1"><Button variant="primary">Contato</Button></div>
            </Card.Body>
          </Card>
        </div>
        <div className="card2">
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="/src/Componentes/pages/img/maicon.jfif" width="300" height="200" />
            <Card.Body><div className="texto">
              <Card.Title>Maicon</Card.Title>
              <Card.Text>
                <i> Co-Facilitador</i><br></br>
              </Card.Text></div>
              <Button variant="primary">Contato</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card3">
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="/src/Componentes/pages/img/bernardo.jfif" width="300" height="200" />
          <Card.Body><div className="texto">
            <Card.Title><i>Bernardo</i></Card.Title>
            <Card.Text>
              <i>Gestora de Conhecimento</i><br></br>
            </Card.Text></div>
            <Button variant="primary">Contato</Button>
          </Card.Body>
        </Card></div>
      </div>
      <div className='cards1'>
      <div className="card4">
      <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="/src/Componentes/pages/img/tamires.jfif" width="300" height="200" />
            <Card.Body><div className="texto">
              <Card.Title>Tamires</Card.Title>
              <Card.Text>
                <i>Colaboradora l</i> <br></br>
              </Card.Text></div>
              <Button variant="primary">Contato</Button>
            </Card.Body>
          </Card></div>
      <div className="card5">
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="/src/Componentes/pages/img/grazi.jpg" width="300" height="200" />
          <Card.Body><div className="texto">
            <Card.Title><i>Grazi</i></Card.Title>
            <Card.Text>
              Colaboradora ll<br></br>
            </Card.Text></div>
            <Button variant="primary">Contato</Button>
          </Card.Body>
        </Card>
      </div>
      </div>
      <Footer />
    </div>

  )
}
