import React from 'react';
import '../../Style/Site.css'


const Footer = props => {
  return (
    <div className='footer'>
      <h2 className='title'>Faça seu orçamento</h2>
      <div className='contact' id='contact'>
        <div className='contact-list contact-address'  >
          <h5><i className='fa fa-map-marker w3-xlarge w3-text-light-grey'></i> Endereço</h5>
          <p>Akersgata 12, Campo grande, Rio de Janeiro </p>
          <p>Bogstadveien 34, Bangu, Rio de Janeiro </p>
          <p>Karl Johans gate 1, Realengo, Rio de Janeiro </p>
        </div>
        <div className='contact-list'>
          <h5><i className='fa fa-envelope w3-xlarge w3-text-light-grey'></i> Receba desconto por Email</h5>
          <div className='email-contact'>
            <input placeholder='Email' type='email' />
            <button className='w3-btn w3-red w3-round ' >Inscreva-se</button>
          </div>
        </div>
        <div className='contact-list' >
          <h5><i className='fa fa-phone w3-xlarge w3-text-light-grey'></i> Telefone</h5>
          <p>  (21)9857-6781</p>
          <p>(21)9144-2591</p>
        </div>
      </div>
    </div>
  )
}

export default Footer