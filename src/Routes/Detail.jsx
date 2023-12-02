import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../Components/Navbar';

const Detail = () => {
  const { id } = useParams();
  const themeContext = useContext(ThemeContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching dentist info:', error));
  }, [id]);

  const styles = {
    backgroundColor: themeContext.theme.background,
    color: themeContext.theme.font,
  };

  return (
    <div style={styles}>
      <h1>Detail Dentist id {id}</h1>
      {userData && (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>Website: {userData.website}</p>
          <p>Addres: {userData.address.street}, {userData.address.suite}, {userData.address.city}, {userData.address.zipcode}</p>
          <p>Company: {userData.company.name}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
