import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import { ThemeContext } from "../Components/Navbar";

const Home = () => {
  const [dentists, setDentists] = useState([]);

  const themeContext = useContext(ThemeContext);
  const styles = {
    backgroundColor: themeContext.theme.background,
    color: themeContext.theme.font,
  };

  useEffect(() => {
    // Hacer la solicitud a la API al montar el componente
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setDentists(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid" style={styles}>
        {dentists.map(dentist => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
