import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'react-router-dom';
import './Forms.css';


function Forms() {
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
  
    // function to update state of name with 
    // value enter by user in form
    const handleChange =(e)=>{
      setName(e.target.value);
    }
    // function to update state of age with value 
    // enter by user in form
    const handleAgeChange =(e)=>{
      setAge(e.target.value);
    }
    // function to update state of email with value
    // enter by user in form
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
      // function to update state of password with 
      // value enter by user in form
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }
      // function to update state of confirm password 
      // with value enter by user in form
    const handleConfPasswordChange =(e)=>{
      setConfPassword(e.target.value);
    }
    // below function will be called when user 
    // click on submit button .
    const handleSubmit=(e)=>{
      if(password!=confPassword)
      {
        // if 'password' and 'confirm password'
        // does not match.
        alert("password Not Match");
      }
      else{
        // display alert box with user 
        // 'name' and 'email' deatils .
        alert('A form was submitted with Name :"' + name +
        '" ,Age :"'+age +'" and Email :"' + email + '"');
      }
      e.preventDefault();
  
    }
  return (
    <div>
    
    <form onSubmit={(e) => {handleSubmit(e)}}>
     {/*when user submit the form , handleSubmit() 
        function will be called .*/}
        <div className="Name">
        <label >
          Name:
        </label><br/>
        <input type="text" value={name} required onChange={(e) => {handleChange(e)}} /><br/>
        </div>
          { /*when user write in name input box , handleChange()
              function will be called. */}
          <div className="Number">
        <label >
          Number:
        </label><br/>
        <input type="tel" value={age} required onChange={(e) => {handleAgeChange(e)}} /><br/>
        </div>  
            { /*when user write in age input box , handleAgeChange()
               function will be called. */}
        <div className="Date">
        <label>
        Data :
        </label><br/>
        <input type="date" value={email} required onChange={(e) => {handleEmailChange(e)}} /><br/>
        </div>
          {/* when user write in email input box , handleEmailChange() 
              function will be called.*/}
        <div className ="tatuador">
        <label>
          Tatuador:
        </label><br/>
        <input type="text" value={password} required onChange={(e) => {handlePasswordChange(e)}} /><br/>
        </div>
              {/* when user write in password input box ,
                  handlePasswordChange() function will be called.*/}
        <div className="Estilo-Tattoo">
        <label>
          Estilo da Tatuagem:
        </label><br/>
        <input type="text" value={confPassword} required onChange={(e) => {handleConfPasswordChange(e)}} /><br/>
        </div>
                {/* when user write in confirm password  input box ,
                    handleConfPasswordChange() function will be called.*/}
        <div className ="enviar">
        <input type="submit" value="Submit"/>
        </div>
    </form>
    </div>
    
  );
}
  
export default Forms;