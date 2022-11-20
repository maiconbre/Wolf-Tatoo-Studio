import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/Site.css';

function Navbara() {
  return (
    <div>
      <header>
        <div className='w3-top' id='home'>
          <div className='w3-bar  w3-card w3-left-align w3-large heeder-large-screen' >
            <a className='w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-black w3-large ' title='Toggle Navigation Menu'><i className='fa fa-bars'></i></a>
            < Link to='#home' className='w3-bar-item w3-button w3-padding-large  w3-hover-black'>Wolf Studio Tattoo</Link>
            <div >
              < Link to='/' className='w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black' >Home</Link>
              <Link to='/studios' className='w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black'> Studios</Link>
              < Link to='/agendamentos' className='w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black'>Agendamento</Link>
              < Link to='/equipe' className='w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black'>Sobre</Link>
            </div>
          </div>
          {/* Navbar on small screens */}
          <div id='navDemo' className='w3-bar-block  w3-hide w3-hide-large w3-hide-medium w3-large'>
            < Link to='#about' className='w3-bar-item w3-button w3-padding-large' >Home</Link>
            < Link to='#games' className='w3-bar-item w3-button w3-padding-large' >Studios</Link>
            < Link to='#shop' className='w3-bar-item w3-button w3-padding-large' >Agendamento</Link>
            < Link to='/equipe' className='w3-bar-item w3-button w3-padding-large' >Sobre</Link>

          </div>
        </div>
      </header>
    </div>
  );
}
export default Navbara