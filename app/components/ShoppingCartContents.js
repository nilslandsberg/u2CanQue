"use client";

import React, { useEffect, useState } from 'react';
import RenderItemOptions from './RenderItemOptions';
import ReturnToMenuButton from './ReturnToMenuButton';
import CheckOutButton from './CheckOutButton';
import OrderDate from './OrderDate';
import { toast } from 'react-toastify';

const ShoppingCartContents = () => {
  const [loading, setLoading] = useState(true);
  const [currentCartItems, setCurrentCartItems] = useState([]);
  const [currentCartDate, setCurrentCartDate] = useState("");
  const [currentCartDayOfWeek, setCurrentCartDayOfWeek] = useState("");
  const [orderTotal, setOrderTotal] = useState(0);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if (shoppingCart && shoppingCart.items && shoppingCart.items.length >= 0) {
      setCurrentCartItems(shoppingCart.items);
      setCurrentCartDate(shoppingCart.date);
      setCurrentCartDayOfWeek(shoppingCart.dayOfWeek);
      setLoading(false); // Set loading to false once data is fetched
    }
  }, []);

  // Hook to update total price of order
  useEffect(() => {
    if (currentCartItems.length > 0) {
      const orderTotalPrice = currentCartItems.reduce((total, item) => {
        return total + item.total;
      }, 0);
    
      const formattedTotal = (orderTotalPrice / 100).toFixed(2)
      setOrderTotal(formattedTotal);
    } else {
      setOrderTotal(0);
    }
  }, [currentCartItems]);

  // hook to update localStorage when items are removed from cart
  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }

    if (currentCartItems.length >= 0) {
      const updatedCart = {
        date: currentCartDate,
        dayOfWeek: currentCartDayOfWeek,
        items: currentCartItems,
      }

      // update shoppingCart in localStorage if currentCart changes
      localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
    }
  }, [currentCartItems, initialRender])

  if (loading) {
    // Return a loading indicator
    return <div className="text-white">Loading...</div>;
  }

  // function to call toast message when item is removed from cart
  const itemRemovedFromCartMessage = (item) => toast.success(`${item} Removed From Cart`);

  const handleClick = (index, name) => {
    // display confirmation dialog
    const confirmRemoval = window.confirm('Are you sure you want to remove this item from your cart?');

    if (confirmRemoval) {
      const updatedItems = [...currentCartItems];
      // remove item from items array
      updatedItems.splice(index, 1);
      // update local state
      setCurrentCartItems(updatedItems);
      itemRemovedFromCartMessage(name);
    }
  }
  
  return (
    <>
      <div className="text-white flex flex-col md:w-1/2 sm:w-1/3">
        <OrderDate orderDate={currentCartDate} dayOfWeek={currentCartDayOfWeek} />
        {currentCartItems.length > 0 ? (
          currentCartItems.map((item, index) => (
            <div key={index} className="flex flex-col text-white mb-4">
              <div className="text-xl font-semibold">{item.name}</div>
              <div className="flex flex-col text-white pt-2">
                {item.options ? <RenderItemOptions options={item.options} /> : <></>}
                {item.sideTwo ? 
                  <>
                    <div className="ml-4">Sides:</div>
                    <div className="ml-8">{item.sideOne}</div>
                    <div className="ml-8">{item.sideTwo}</div>
                  </> : <></>
                }
                {item.sideOne && !item.sideTwo ? <div className="ml-4">Side: {item.sideOne}</div> : <></>}
                {item.bread ? <div className="ml-4">Bread: {item.bread}</div> : <></>}
                {item.size ? <div className="ml-4"> Size: {item.size.split(":")[0]}</div> : <></>}
                <div className="ml-4">Quantity: {item.quantity}</div>
                {/* Display the item total with decimal point added */}
                <div className="flex justify-end">Price: ${(item.total / 100).toFixed(2)}</div> 
              </div>
              <button className="flex justify-end underline italic text-blue-500" onClick={() => handleClick(index, item.name)}>remove item</button>
            </div>
          ))
        ) : (
          <div className="flex justify-center mb-4 text-2xl font-bold italic">There are no items in your cart.</div>
        )}
      </div>
      {currentCartItems.length > 0 ? 
        <>
          <div className="order-total-container flex flex-row items-center md:w-1/2 sm:w-1/3 justify-end text-white border-t border-white py-4">
            <div className="text-2xl font-bold">Total: </div>
            <div className="text-lg ml-4"> ${orderTotal}</div>
          </div>
          <div className="checkout-button-container flex flex-row md:w-1/2 sm:w-1/3 justify-end">
            <CheckOutButton />  
          </div>
        </> : <></>}
      <ReturnToMenuButton dayOfWeek={currentCartDayOfWeek} />
    </>
  );
}
  
export default ShoppingCartContents