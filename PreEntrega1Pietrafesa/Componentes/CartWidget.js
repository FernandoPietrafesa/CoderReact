import React from 'react';

const CartWidget = () => {
  const cartItemsCount = 5; // Número hardcodeado de elementos en el carrito

  return (
    <div>
      <i className="fas fa-shopping-cart"></i> {/* Aquí puedes usar el icono que prefieras */}
      <span>{cartItemsCount}</span>
    </div>
  );
}

export default CartWidget;