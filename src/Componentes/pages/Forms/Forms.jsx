
import '../Forms/Forms.css'
import App from './App';

function Forms() {
  const onSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.elements.name.value)
    async function postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc. 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    postData('/tatuadores', {
      name: event.target.elements.name.value, 
      phone: event.target.elements.phone.value, 
      tattoo_style: event.target.elements.tattoo_style.value,
      tatuador_id: event.target.elements.tatuador_id.value, 
      date: event.target.elements.date.value
    })
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      });
  }
  return (
    <div className='forms_container'>


      <form onSubmit={onSubmit}>
        <div>
          <label>
            Nome
          </label>
          <input type="text" text="Nome" name="name" placeholder="Nome" />
        </div>
        <div>
          <label>
            Telefone de contato
          </label>
          <input type="tel" name="phone" placeholder='Insira seu numero' />
        </div>
        <div>
          <label>
            Data da Sessão
          </label>
          <input type="date" name="date" placeholder='Data' />
        </div>
        <div>
          <label>
            Tatuador
          </label>
          <select name="tatuador_id">
            <option>Selecione o tatuador</option>
            <option id='1'>Brenda Palácios </option>
            <option id='2'>Benicio Braga</option>
            <option id='3'>Fernando Torres</option>
            <option id='4'>Marilia Fernandes</option>
          </select>
        </div>
        <div>
          <label>
            Estilo de tatuagem
          </label>
          <input type="text" name="tattoo_style" placeholder='Estilo da tatuagem' />
        </div>
        <div>
          <button type="submit" event="submit" value="Enviar agendamento">Enviar agendamento</button><App />
        </div>

      </form>
    </div>
  )
}

export default Forms;