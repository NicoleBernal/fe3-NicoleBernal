import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ThemeContext } from '../Components/Navbar'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const themeContext = useContext(ThemeContext);
  const styles = {
    backgroundColor: themeContext.theme.background,
    color: themeContext.theme.font,
  };
  
  return (  
    <> 
      <h1>Contact Dentists</h1>
      <div style={styles}>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form/>
      </div>
    </>
  )
}

export default Contact