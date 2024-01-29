"use client";

import React, { useEffect, useState } from 'react';
import RenderItemOptions from './RenderItemOptions';
import ReturnToMenuButton from './ReturnToMenuButton';

const ShoppingCartContents = () => {
  const [loading, setLoading] = useState(true);
  const [currentCart, setCurrentCart] = useState({ items: [] });
  const [orderTotal, setOrderTotal] = useState();

  useEffect(() => {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if (shoppingCart && shoppingCart.items && shoppingCart.items.length > 0) {
      setCurrentCart(shoppingCart);
      setLoading(false); // Set loading to false once data is fetched
    }
  }, []);

  useEffect(() => {
    const orderTotalPrice = currentCart.items.reduce((total, item) => {
      return total + item.total;
    }, 0);
  
    const formattedTotal = (orderTotalPrice / 100).toFixed(2)
    setOrderTotal(formattedTotal);
  }, [currentCart]);

  if (loading) {
    // Return a loading indicator
    return <div className="text-white">Loading...</div>;
  }


  


  return (
    <>
      <div className="text-white flex flex-col md:w-1/2 sm:w-1/3">
        {currentCart.items.length > 0 ? (
          currentCart.items.map((item, index) => (
            <div key={index} className="flex flex-col text-white mb-4">
              <div className="text-lg font-semibold">{item.name}</div>
              <div className="flex flex-col text-white pt-2">
                {item.options ? <RenderItemOptions options={item.options} /> : <></>}
                {item.bread ? <div className="ml-4">Bread: {item.bread}</div> : <></>}
                {/* Display the item total with decimal point added */}
                <div className="flex justify-end">Price: ${(item.total / 100).toFixed(2)}</div> 
              </div>
            </div>
          ))
        ) : (
          <div>There are no items in your cart.</div>
        )}
      </div>
      <div className="order-total-container flex flex-row items-center md:w-1/2 sm:w-1/3 justify-end text-white mb-4">
        <div className="text-2xl bold">Total: </div>
        <div className="text-lg ml-4"> ${orderTotal}</div>
      </div>
      <ReturnToMenuButton dayOfWeek={currentCart.dayOfWeek} />
    </>
  );
}
  
export default ShoppingCartContents