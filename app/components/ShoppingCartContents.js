"use client";

import React, { useEffect, useState } from 'react';
import RenderItemOptions from './RenderItemOptions';
import ReturnToMenuButton from './ReturnToMenuButton';
import RemoveItemFromCart from './RemoveItemFromCart';

const ShoppingCartContents = () => {
  const [loading, setLoading] = useState(true);
  const [currentCart, setCurrentCart] = useState({ items: [] });
  const [orderTotal, setOrderTotal] = useState(0);

  console.log("Current Cart: ", currentCart)
  useEffect(() => {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if (shoppingCart && shoppingCart.items && shoppingCart.items.length > 0) {
      setCurrentCart(shoppingCart);
      setLoading(false); // Set loading to false once data is fetched
    }
  }, []);

  useEffect(() => {
    if (currentCart.items.length > 0) {
      const orderTotalPrice = currentCart.items.reduce((total, item) => {
        return total + item.total;
      }, 0);
    
      const formattedTotal = (orderTotalPrice / 100).toFixed(2)
      setOrderTotal(formattedTotal);
    } else {
      setOrderTotal(0);
    }
    // update shoppingCart in localStorage if currentCart changes
    localStorage.setItem('shoppingCart', JSON.stringify(currentCart));
  }, [currentCart]);

  if (loading) {
    // Return a loading indicator
    return <div className="text-white">Loading...</div>;
  }

  const handleClick = (index) => {
    // display confirmation dialog
    const confirmRemoval = window.confirm('Are you sure you want to remove this item from your cart?');

    if (confirmRemoval) {
      const updatedItems = [...currentCart.items]
      // remove item from items array
      updatedItems.splice(index, 1);
      // update local state
      setCurrentCart({...currentCart, items:updatedItems});
    }
  }
  
  return (
    <>
      <div className="text-white flex flex-col md:w-1/2 sm:w-1/3">
        {currentCart.items.length > 0 ? (
          currentCart.items.map((item, index) => (
            <div key={index} className="flex flex-col text-white mb-4">
              <div className="text-xl font-semibold">{item.name}</div>
              <div className="flex flex-col text-white pt-2">
                {item.options ? <RenderItemOptions options={item.options} /> : <></>}
                {item.bread ? <div className="ml-4">Bread: {item.bread}</div> : <></>}
                <div className="ml-4">Quantity: {item.quantity}</div>
                {/* Display the item total with decimal point added */}
                <div className="flex justify-end">Price: ${(item.total / 100).toFixed(2)}</div> 
              </div>
              {/* <RemoveItemFromCart index={index}/> */}
              <button className="flex justify-end underline italic text-blue-500" onClick={() => handleClick(index)}>remove item</button>
            </div>
          ))
        ) : (
          <div className="flex justify-center text-2xl font-bold italic">There are no items in your cart.</div>
        )}
      </div>
      {currentCart.items.length > 0 ? <div className="order-total-container flex flex-row items-center md:w-1/2 sm:w-1/3 justify-end text-white border-t border-white py-4">
        <div className="text-2xl font-bold">Total: </div>
        <div className="text-lg ml-4"> ${orderTotal}</div>
      </div> : <></>}
      <ReturnToMenuButton dayOfWeek={currentCart.dayOfWeek} />
    </>
  );
}
  
export default ShoppingCartContents