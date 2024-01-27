"use client";

import React, { useEffect, useState } from 'react';
import RenderItemOptions from './RenderItemOptions';
import ReturnToMenuButton from './ReturnToMenuButton';

const ShoppingCartContents = () => {
  const [loading, setLoading] = useState(true);
  const [currentCart, setCurrentCart] = useState({ items: [] });

  useEffect(() => {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if (shoppingCart && shoppingCart.items && shoppingCart.items.length > 0) {
      setCurrentCart(shoppingCart);
      setLoading(false); // Set loading to false once data is fetched
    }
  }, []);

  if (loading) {
    // Return a loading indicator
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="text-white flex flex-col">
      {currentCart.items.length > 0 ? (
        currentCart.items.map((item, index) => (
          <div key={index} className="flex flex-col text-white mb-4">
            <div className="text-lg font-semibold">{item.name}</div>
            <div className="flex flex-col text-white pt-2">
              {item.options ? <RenderItemOptions options={item.options} /> : <></>}
              {item.bread ? <div className="ml-4">Bread: {item.bread}</div> : <></>}
              <div className="flex justify-end">Price: {item.total}</div>
            </div>
          </div>
        ))
      ) : (
        <div>There are no items in your cart.</div>
      )}
      <ReturnToMenuButton dayOfWeek={currentCart.dayOfWeek} />
    </div>
  );
}
  
export default ShoppingCartContents