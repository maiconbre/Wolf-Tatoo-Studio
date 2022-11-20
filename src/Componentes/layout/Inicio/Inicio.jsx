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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit quo. Officia nisi corrupti iste asperiores accusamus quisquam quod perspiciatis vitae? Esse eum molestiae ab quasi omnis quidem officia eaque.
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