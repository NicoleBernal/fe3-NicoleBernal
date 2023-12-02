import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ThemeContext } from "../Components/Navbar";

const Favs = () => {
  const themeContext = useContext(ThemeContext);
  const styles = {
    backgroundColor: themeContext.theme.background,
    color: themeContext.theme.font,
  };

  const [favoriteDentists, setFavoriteDentists] = useState([]);

  useEffect(() => {
    // Obtener datos del localStorage al montar el componente
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteDentists(storedFavorites);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid" style={styles}>
        {favoriteDentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
