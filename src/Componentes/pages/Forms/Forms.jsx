import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import './forms.css'

function FormTextExample() {
  return (
    <div>
      <div className ="Nome">
    
      <Form.Label htmlFor="inputText">Nome</Form.Label>
      <Form.Control type="text" id="inputText" />
    
    </div>
    <div className ="Number">
     <Form.Label htmlFor="inputFone" className="Number">Telefone</Form.Label>
     <Form.Control type="number" id="inputFone" />
   </div> 
   <br></br>
   <div className="Tatuadores">
   <Form.Select aria-label="Default select example">
      <option>Selecione o Tatuador</option>
      <option value="1">Gabi</option>
      <option value="2">Bruno</option>
      <option value="3">Leonardo</option>
    </Form.Select>
   </div>
   <div className ="Estilo">
    <>
      <Form.Label htmlFor="inputText">Estilo da Tatuagem</Form.Label>
      <Form.Control type="text" id="inputText" />
    </>
    </div>
    <br></br>
    <div className ="Comentario">
      <FloatingLabel controlId="floatingTextarea2" label=" Deixe seu feedback ou o seu pedido.">
        <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
      </FloatingLabel>
      </div>
   </div>
  );
}

export default FormTextExample;