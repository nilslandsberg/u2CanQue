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
  const [selectedPickUpTime, setSelectedPickUpTime] = useState("");
  const [selectTimeMessage, setSelectTimeMessage] = useState("");
  
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
  } else {
    console.log(currentCartItems)
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
  
  const handleTimeChange = (value) => {
    setSelectedPickUpTime(value);
  }

  const times = ["10:00am", "10:15am", "10:30am", "10:45am", "11:00am", "11:15am", "11:30am", "11:45am", "12:00pm", "12:15pm", "12:30pm", "12:45pm", "1:00pm", "1:15pm", "1:30pm", "1:45pm", "2:00pm", "2:15pm", "2:30pm", "2:45pm"]
  return (
    <>
      <div className="text-white flex flex-col lg:w-1/2 md:w-1/3 px-2">
        <OrderDate orderDate={currentCartDate} dayOfWeek={currentCartDayOfWeek} />
        {currentCartItems.length > 0 ? (
          currentCartItems.map((item, index) => (
            <div key={index} className="flex flex-col text-white mb-4 px-2">
              <div className="text-xl font-semibold">{item.name}</div>
              <div className="flex flex-col text-white pt-2">
                {item.options ? <RenderItemOptions options={item.options} /> : <></>}
                {item.sideTwo ? 
                  <>
                    <div className="ml-4 font-semibold">Sides:</div>
                    <div className="ml-8">{item.sideOne}</div>
                    <div className="ml-8">{item.sideTwo}</div>
                  </> : <></>
                }
                {item.sideOne && !item.sideTwo ? <div className="ml-4 font-semibold">Side: {item.sideOne}</div> : <></>}
                {item.bread ? <div className="ml-4 font-semibold">Bread: {item.bread}</div> : <></>}
                {item.size ? <div className="ml-4 font-semibold"> Size: {item.size.split(":")[0]}</div> : <></>}
                <div className="ml-4 font-semibold">Quantity: {item.quantity}</div>
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
          <div className="pick-up-time-container flex lg:flex-row md:flex-col sm:flex-col items-center md:w-1/2 sm:w-1/3 justify-end text-white mb-2 px-2">
            <label className="mr-2">Time Order Will Be Ready:</label>
            <select
              value={selectedPickUpTime}
              onChange={(e) => handleTimeChange(e.target.value)}
              className="mt-2 mb-2 bg-slate-600 text-white"
            >
              <option value="">Select Pickup Time</option>
              {times.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="checkout-button-container flex flex-row md:w-1/2 sm:w-1/3 justify-end">
            <div className="flex flex-col justify-end">
              {selectTimeMessage && <div className="text-red-500">{selectTimeMessage}</div>}
              <div className="flex-grow-0">
                <CheckOutButton 
                  setSelectTimeMessage={setSelectTimeMessage} 
                  selectedTime={selectedPickUpTime} 
                />  
              </div>
            </div>
          </div>
        </> : <></>}
      <ReturnToMenuButton dayOfWeek={currentCartDayOfWeek} />
    </>
  );
}
  
export default ShoppingCartContents