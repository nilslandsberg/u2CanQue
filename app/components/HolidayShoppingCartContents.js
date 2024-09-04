"use client";

import React, { useEffect, useState } from 'react';
import RenderItemOptions from './RenderItemOptions';
import { toast } from 'react-toastify';
import CustomerInformation from './CustomerInformation';
import HolidayReturnToMenuButton from './HolidayReturnToMenuButton';
import { capitalizeFirstLetter } from '../utils/stringManipulation';
import HolidayPickUpDay from './HoidayPickUpDay';
import HolidayCheckOutButton from './HolidayCheckoutButton';
import { isItRibsTime } from '../utils/dateCheck';

const HolidayholidayShoppingCartContents = ({ holiday }) => {
  const [loading, setLoading] = useState(true);
  const [currentCartItems, setCurrentCartItems] = useState([]);
  const [selectedPickUpDate, setSelectedPickUpDate] = useState("");
  const [currentCartHoliday, setCurrentCartHoliday] = useState("");
  const [orderTotal, setOrderTotal] = useState(0);
  const [initialRender, setInitialRender] = useState(true);
  const [selectedPickUpTime, setSelectedPickUpTime] = useState("");
  const [selectTimeMessage, setSelectTimeMessage] = useState("");
  const [customerInformation, setCustomerInformation] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  const capitalizedHoliday = capitalizeFirstLetter(holiday);
  
  useEffect(() => {
    const holidayShoppingCart = JSON.parse(localStorage.getItem('holidayShoppingCart'));

    if (holidayShoppingCart && holidayShoppingCart.items && holidayShoppingCart.items.length >= 0) {
      setCurrentCartItems(holidayShoppingCart.items);
      setSelectedPickUpDate(holidayShoppingCart.pickUpDate);
      setCurrentCartHoliday(holiday);
      setSelectedPickUpTime(holidayShoppingCart.pickUpTime);
      setLoading(false); // Set loading to false once localStorage is accessed and state is updated
    } else {
      setLoading(false)
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
        date: selectedPickUpDate,
        holiday: currentCartHoliday,
        items: currentCartItems,
        pickUpTime: selectedPickUpTime
      }

      // update holidayShoppingCart in localStorage if currentCart changes
      localStorage.setItem('holidayShoppingCart', JSON.stringify(updatedCart));
    }
  }, [currentCartItems, initialRender, selectedPickUpTime, selectedPickUpDate])

  if (loading) {
    // Return a loading indicator
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
      </div>
    );
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
  // times array for food pickup
  const times = ["10:00am", "10:15am", "10:30am", "10:45am", "11:00am", "11:15am", "11:30am", "11:45am", "12:00pm", "12:15pm", "12:30pm", "12:45pm", "1:00pm", "1:15pm", "1:30pm", "1:45pm", "2:00pm", "2:15pm", "2:30pm", "2:45pm"]
  const ribTimes = [...times, "3:00pm", "3:15pm", "3:30pm", "3:45pm", "4:00pm", "4:15pm", "4:30pm", "4:45pm", "5:00pm"];
  
  const ribsFlashSale = isItRibsTime();
  return (
    <>
      <div className="text-white flex flex-col lg:w-1/2 md:w-1/3 px-2">
        {selectedPickUpDate === "" ? <></> : <div className="text-2xl italic font-bold text-center mb-6">Order Summary for {capitalizedHoliday}</div>}
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
          <CustomerInformation setCustomerInformation={setCustomerInformation} customerInformation={customerInformation}/>
          <div className="pick-up-time-container flex lg:flex-row md:flex-col sm:flex-col items-center md:w-1/2 sm:w-1/3 justify-end text-white mb-2 px-2">
            <HolidayPickUpDay 
              holiday={capitalizedHoliday} 
              setSelectedPickUpDate={setSelectedPickUpDate}
              selectedPickUpDate={selectedPickUpDate} />
          </div>
          <div className="pick-up-time-container flex lg:flex-row md:flex-col sm:flex-col items-center md:w-1/2 sm:w-1/3 justify-end text-white mb-2 px-2">
            <label className="mr-2">Pickup Time:</label>
            <select
              value={selectedPickUpTime}
              onChange={(e) => handleTimeChange(e.target.value)}
              className="mt-2 mb-2 bg-slate-600 text-white"
            >
              <option value="">Select Pickup Time</option>
              {ribsFlashSale ? ribTimes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              )) :times.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="checkout-button-container flex flex-col md:w-1/2 sm:w-1/3 justify-end">
            <div className="flex flex-row justify-end mb-2">
              {selectTimeMessage && <div className="text-red-500">{selectTimeMessage}</div>}
            </div>
            <div className="flex flex-row justify-end">
              <HolidayCheckOutButton
                setSelectTimeMessage={setSelectTimeMessage} 
                selectedPickUpDate={selectedPickUpDate}
                selectedTime={selectedPickUpTime}
                date={selectedPickUpDate}
                cartItems={currentCartItems} 
                orderTotal={orderTotal}
                customerInformation={customerInformation}
              /> 
            </div> 
          </div>
        </> : <></>}
      <HolidayReturnToMenuButton holiday={capitalizedHoliday} />
    </>
  );
}
  
export default HolidayholidayShoppingCartContents