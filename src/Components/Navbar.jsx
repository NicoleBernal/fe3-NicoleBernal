import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';
import Contact from '../Routes/Contact';
import Favs from '../Routes/Favs';

export const themes = {
  light: {
    font: 'black',
    background: 'white',
  },
  dark: {
    font: 'white',
    background: 'black',
  },
};
export const ThemeContext = createContext(themes.light);

const Navbar = () => {
  const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === themes.light ? themes.dark : themes.light;
    default:
      return state;
  }
};

  const [theme, dispatch] = useReducer(themeReducer, themes.light);

  const handleChangeTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, setTheme: dispatch }}>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/dentist/1">Dentist Detail</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/favs">Favoritos</Link>
          <button onClick={handleChangeTheme}>Cambiar tema</button>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/dentist/:id" element={<Detail />} />
          {/* Ruta por defecto o redirección */}
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </ThemeContext.Provider>
    </Router>
  );
};

export default Navbar;
