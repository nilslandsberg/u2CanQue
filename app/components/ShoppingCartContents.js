"use client";

import React, { useEffect, useState } from 'react';

const ShoppingCartContents = () => {
  const [loading, setLoading] = useState(true);
  const [currentCart, setCurrentCart] = useState({ items: [] });

  useEffect(() => {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if (shoppingCart && shoppingCart.items && shoppingCart.items.length > 0) {
      setCurrentCart(shoppingCart);
    }
    setLoading(false); // Set loading to false once data is fetched
  }, []);

  if (loading) {
    // Return a loading indicator
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="text-white">
      {currentCart.items.length > 0 ? (
        currentCart.items.map((item, index) => (
          <div key={index}>{item.item}</div>
        ))
      ) : (
        <div>There are no items in your cart.</div>
      )}
    </div>
  );
};

export default ShoppingCartContents;
