import React, { Component } from 'react';
import { render } from 'react-dom';
import Api from './Api'

class App extends Component{
   
  
 state ={
        tatuadores:[]
 }

async componentDidMount(){

    const response = await Api.get('/tatuadores');
    //console.log(response.data);
    this.setState({tatuadores: response.data});

   
    
}

    render(){

        const { tatuadores } = this.state;

        return(
            <div>
                <h1>Profissionais</h1>
                {console.log(tatuadores)}
                {tatuadores.map(tatuadores => (
                    <li key={tatuadores}>
                       <h2> {tatuadores.nome} </h2>
                        <br></br>
                        <h3>
                        {tatuadores.estilo}
                        <br/>
                        {tatuadores.experiencia}
                        </h3>
                    </li>
                
                    ))}

                   
            </div>
        )
    }
}
export default App;