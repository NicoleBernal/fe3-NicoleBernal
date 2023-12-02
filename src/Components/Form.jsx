import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [formData,setFormData]=useState({
    nombreCompleto:'',
    email:'',
  });

  const [errors,setErrors]=useState({});  
  const [successMessage, setSuccessMessage] = useState('');

  const FormHandleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value,
    });
  };

  const validateForm=()=>{
    const newErrors={};
    if((formData.nombreCompleto.length<5)||(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))){
      newErrors.general="Por favor verifique su información nuevamente";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  };

  const FormHandleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage(`Gracias ${formData.nombreCompleto}, te contactaremos cuando antes vía mail`);
   } 
  };
  
  return (
    <div>
      <form onSubmit={FormHandleSubmit}>
        <div>
            <label htmlFor="nombreCompleto">Nombre Completo: </label>
            <input 
              type="text"
              id="nombreCompleto"
              value={formData.nombreCompleto}
              onChange={FormHandleChange}
            />
        </div>
        <div>
             <label htmlFor="email">Email: </label>
             <input 
              type="text"
              id="email"
              value={formData.email}
              onChange={FormHandleChange}
            />
        </div>
        <button type="submit">Enviar</button>
        {errors.general && <div style={{ color: 'red' }}>{errors.general}</div>}
      </form>
    </div>
  );
};

export default Form
