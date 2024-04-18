import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <h1>Fer Pietrafesa</h1>
      <ul>
        <li><a href="#">Categoría 1</a></li>
        <li><a href="#">Categoría 2</a></li>
        <li><a href="#">Categoría 3</a></li>
        {/* Agrega más categorías según sea necesario */}
      </ul>
    </nav>
  );
}

export default NavBar;