 import styles from '../Forms/Forms.css'
 
 function Forms() {
  return(
    <div className='forms_container'>
      <h1>Faça seu agendamento</h1>
      <form>
        <div>
          <label>
            Nome
          </label>
        <input type="text" placeholder='Insira seu nome' />
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
        <select name="category_id">
          <option>Selecione o tatuador</option>
          <option id='1'>Brenda Palácios </option>
          <option id='2'>Benicio Braga</option>
          <option id='3'>Fernando Torres</option>
        </select>
        </div>
        <div>
        <input type="submit" value="Enviar agendamento"></input>
        </div>
      </form>
    </div>
  )
 }

 export default Forms;