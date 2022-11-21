import React from 'react';
import '../../Style/Site.css';


const Inicio = props => {
    return (
        <div>
            <section >
                <div className='hero' id='about'>
                    <div className='hero-description'>
                        <div className='hero-text'>
                            <h1 className='hero-title'>Eternize suas ideias</h1>
                            <p>
                            Wolf Tatoo Studio nasceu no Rio de Janeiro, com a proposta de trazer um ambiente mais inclusivo, diverso e acolhedor. São profissionais de áreas de distintas que se reuniram por um só propósito. O amor pela arte, pela expressão e pelo mundo das tatuagens.</p> 
                            <p><i>
                            “Nossos artistas são diferenciados, todos eles são de lugares diferentes, mundos diferentes, mas encontraram no nosso espaço um lugar que é para todos, em que o talento, a técnica e a liberdade de expressão são exaltados ao máximo atendendo todo tipo de gente.</i></p> 
                            
                            <p>

                             Começou como um pequeno estúdio voltado para a área estética em tatuar regiões do corpo que antes traziam sofrimento para as pessoas, uma cicatriz pode se transformar numa rosa, num símbolo de força, isso é com o cliente! Mas eles saem felizes, satisfeitos e com a autoestima lá em cima. Logo, outros tatuadores se identificaram com nosso propósito e hoje temos orgulho de dizer que somos referência em técnicas diferenciadas, mas também fazemos nosso clientes felizes com o tradicional.

                            Não importa o que você está procurando, certamente encontrará aqui!
                            </p>
                            <span className='w3-text-white social'>
                                <p >Sigam nossas midias sociais</p>
                                <div className='w3-margin-top'>
                                    <a href='#'>  <i className='fa fa-facebook-official w3-hover-opacity icons' ></i></a>
                                    <a href='#'><i className='fa fa-instagram w3-hover-opacity icons' ></i></a>
                                    <a href='#'><i className='fa fa-snapchat w3-hover-opacity icons'></i></a>
                                    <a href='#'><i className='fa fa-pinterest-p w3-hover-opacity icons' ></i></a>
                                    <a href='#'><i className='fa fa-twitter w3-hover-opacity icons'></i></a>
                                    <a href='#'><i className='fa fa-linkedin w3-hover-opacity icons'></i></a>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Inicio