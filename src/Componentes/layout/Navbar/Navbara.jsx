import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function Navbara () {
    return (
<<<<<<< Updated upstream
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  href="/">Wolf Tattoo Studio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Agendamentos">Agendamentos</Nav.Link>
            <Nav.Link href="/studios">Studios</Nav.Link>
            <Nav.Link href="/equipe">Equipe</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
=======
      <div>
      <header>
          <div className='w3-top' id='home'>
              <div className='w3-bar  w3-card w3-left-align w3-large heeder-large-screen' >
                  <a className='w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-black w3-large ' title='Toggle Navigation Menu'><i className='fa fa-bars'></i></a>
                  <a href='#home' className='w3-bar-item w3-button w3-padding-large  w3-hover-black'>Wolf Studio Tattoo</a>
                  <div >
                      <a href='/' className='w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black' >Home</a>
                      <a href='/studios' className='w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black'> Studios</a>
                      <a href='/agendamentos' className='w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black'>Agendamento</a>
                      <a href='/equipe' className='w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black'>Sobre</a>
                      
                  </div>

              </div>

              {/* Navbar on small screens */}
              <div id='navDemo' className='w3-bar-block  w3-hide w3-hide-large w3-hide-medium w3-large'>
                  <a href='/' className='w3-bar-item w3-button w3-padding-large' >Home</a>
                  <a href='/studios' className='w3-bar-item w3-button w3-padding-large' >Studios</a>
                  <a href='/agendamentos' className='w3-bar-item w3-button w3-padding-large' >Agendamento</a>
                  <a href='/equipe' className='w3-bar-item w3-button w3-padding-large' >Sobre</a>
                  
              </div>
          </div>
      </header>
  </div>
>>>>>>> Stashed changes
    );
}
export default Navbara