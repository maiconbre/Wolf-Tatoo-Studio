import React, { Component } from 'react';
import { render } from 'react-dom';
import Api from '../../layout/Api/Api'

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
                <h1>Lista de Tatuadores</h1>
                {console.log(tatuadores)}
                {tatuadores.map(tatuadores => (
                    <li key={tatuadores}>
                       <h2> {tatuadores.nome} </h2>
                        <br></br>
                        <p>
                        {tatuadores.estilo}
                        </p>
                    </li>
                
                    ))}
            </div>
        )
    }
}
export default App;