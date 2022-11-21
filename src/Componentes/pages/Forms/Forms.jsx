 
 import  '../Forms/Forms.css'
 
 const API = "https://json-server-onqo.onrender.com/";

 function Forms() {


  return(
    <div className='forms_container'>
      <h1>Faça seu agendamento</h1>
      <br></br>
      <hr></hr>
      <form>
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
        <input type="tel" placeholder='Insira seu numero' />
        </div>
        <div>
          <label>
          Data da Sessão
          </label>
        <input type="date" placeholder='Data' />
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
        </select>
        </div>
        <div>
          <label>
            Estilo de tatuagem
          </label>
          <input type="text" placeholder='Estilo da tatuagem'/>
        </div>
        <div>
        <button type="submit" value="Enviar agendamento">Enviar agendamento</button>
        </div>
      </form>
    </div>
  )
 }

 export default Forms;