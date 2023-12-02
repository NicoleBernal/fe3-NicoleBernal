import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Components/Navbar';

const Card = ({ id, name, username, onCardClick }) => {
  const { dispatch } = useContext(ThemeContext);
  const [dentistInfo, setDentistInfo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentistInfo(data))
      .catch(error => console.error('Error fetching dentist info:', error));
  }, [id]);

  const addFav = () => {
    dispatch({ type: 'ADD_FAV', payload: { id, name, username } });
  };

  const handleClick = () => {
    // Pasa el estado del dentista al componente Detail
    onCardClick({id});
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{`@${username}`}</p>
      <p>{`ID: ${id}`}</p>

      {dentistInfo && (
        <div>
          <p>Email: {dentistInfo.email}</p>
          <p>Teléfono: {dentistInfo.phone}</p>
          <p>Sitio web: {dentistInfo.website}</p>
        </div>
      )}

      <Link to={`/dentist/${id}`} className="detailLink" onClick={handleClick}>
        View Details
      </Link>

      <button onClick={addFav} className="favButton">
        Add Fav
      </button>
    </div>
  );
};

export default Card;
