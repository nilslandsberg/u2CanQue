"use client";

import React, { useEffect, useState } from 'react'
import OrderDate from './OrderDate';
import { useRouter } from 'next/navigation';
import { capitalizeFirstLetter } from '../utils/stringManipulation';

const OrderConfirmation = () => {
  const [loading, setLoading] = useState(true);
  const [currentCartDate, setCurrentCartDate] = useState();
  const [selectedPickUpTime, setSelectedPickUpTime] = useState();
  const [dayOfWeek, setDayOfWeek] = useState();
  const [customerName, setCustomerName] = useState();
  const [customerInfo, setCustomerInfo] = useState();
  const [currentCartItems, setCurrentCartItems] = useState();
  const [orderTotal, setOrderTotal] = useState();
  const [holidayOrder, setHolidayOrder] = useState(false);
  const [holiday, setHoliday] = useState();
  const [standardOrder, setStandardOrder] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  const router = useRouter();

  

  useEffect(() => {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    const holidayShoppingCart = JSON.parse(localStorage.getItem('holidayShoppingCart'));
  
    // if (firstLoad) { // Check if it's the first load
    //   if (!shoppingCart && !holidayShoppingCart) {
    //     router.push('/');
    //     setFirstLoad(false); // Set firstLoad to false after redirecting
    //     return; // Exit the useEffect
    //   }
    // }
  
    // Check if shoppingCart exists in localStorage and if it has items. Update local state accordingly.
    if (shoppingCart && shoppingCart.items && shoppingCart.items.length >= 0) {
      setCurrentCartDate(shoppingCart.date);
      setSelectedPickUpTime(shoppingCart.pickUpTime);
      setDayOfWeek(shoppingCart.dayOfWeek);
      setCustomerName(shoppingCart.customer.firstName);
      setCustomerInfo(shoppingCart.customer);
      setCurrentCartItems(shoppingCart.items);
      setOrderTotal(shoppingCart.orderTotal);
      setStandardOrder(true);
      setLoading(false); // Set loading to false once localStorage is accessed and state is updated
  
      // Remove shoppingCart from localStorage after it's used
      localStorage.removeItem('shoppingCart');
    } else if (holidayShoppingCart && holidayShoppingCart.items && holidayShoppingCart.items.length >= 0) {
      const capitalizedHoliday = capitalizeFirstLetter(holidayShoppingCart.holiday)
      setHolidayOrder(true);
      setHoliday(capitalizedHoliday);
      setCurrentCartDate(holidayShoppingCart.date)
      setSelectedPickUpTime(holidayShoppingCart.pickUpTime);
      setCustomerName(holidayShoppingCart.customer.firstName);
      setCustomerInfo(holidayShoppingCart.customer);
      setCurrentCartItems(holidayShoppingCart.items);
      setOrderTotal(holidayShoppingCart.orderTotal);
      setLoading(false);
  
      // Remove holidayShoppingCart from localStorage after it's used
      localStorage.removeItem('holidayShoppingCart');
    }
  
    // Cleanup function to clear localStorage
    return () => {
      localStorage.removeItem('shoppingCart');
      localStorage.removeItem('holidayShoppingCart');
    };
  }, []);
  

  useEffect(() => {
    if (!loading) {
      if (standardOrder) {
        const requestBody = {
          date: currentCartDate,
          pickUpTime: selectedPickUpTime,
          customer: customerInfo,
          items: currentCartItems,
          orderTotal: orderTotal
        }
        // Make a POST request to the server after the local state is updated
        fetch('https://u2canque-server.onrender.com/api/order/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        })
        .then(response => {
          console.log(response);
          if (response.ok) {
            localStorage.removeItem('shoppingCart');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }

      if (holidayOrder) {
        
        const requestBody = {
          holiday: holiday,
          year: new Date().getFullYear(),
          pickUpDate: currentCartDate,
          pickUpTime: selectedPickUpTime,
          customer: customerInfo,
          items: currentCartItems,
          orderTotal: orderTotal
        }
        // Make a POST request to the server after the local state is updated
        fetch('https://u2canque-server.onrender.com/api/order/holiday', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        })
        .then(response => {
          console.log(response);
          if (response.ok) {
            localStorage.removeItem('holidayShoppingCart');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
        console.log(requestBody)
      }
    }
  }, [loading]);

  return (
    <>
      { loading ? <div>Loading...</div> : <>
          <div className="text-white">Thank you for your order, {customerName}!</div>
          <br />
          <div>We look forward to seeing you at {selectedPickUpTime}</div>
          <div>on { !holidayOrder ? <OrderDate orderDate={currentCartDate} dayOfWeek={dayOfWeek}/> : currentCartDate }.</div>
          <br />
          <div>If you need to cancel or change your order, please contact the store:</div>
          <br />
          <div className="flex flex-col text-center">
            <div>Phone: (740) 236-7269</div>
            <div>Email: u2canque@gmail.com</div>
          </div>
        </> 
      }
    </>
  )
}

export default OrderConfirmation