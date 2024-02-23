"use client";

import React, { useEffect, useState } from 'react'
import OrderDate from './OrderDate';

const OrderConfirmation = () => {
  const [loading, setLoading] = useState(true);
  const [currentCartDate, setCurrentCartDate] = useState();
  const [selectedPickUpTime, setSelectedPickUpTime] = useState();
  const [dayOfWeek, setDayOfWeek] = useState();
  const [customerName, setCustomerName] = useState();
  const [customerInfo, setCustomerInfo] = useState();
  const [currentCartItems, setCurrentCartItems] = useState();
  const [orderTotal, setOrderTotal] = useState();


  useEffect(() => {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

    if (shoppingCart && shoppingCart.items && shoppingCart.items.length >= 0) {
      setCurrentCartDate(shoppingCart.date);
      setSelectedPickUpTime(shoppingCart.pickUpTime);
      setDayOfWeek(shoppingCart.dayOfWeek);
      setCustomerName(shoppingCart.customer.firstName);
      setCustomerInfo(shoppingCart.customer);
      setCurrentCartItems(shoppingCart.items);
      setOrderTotal(shoppingCart.orderTotal);
      setLoading(false); // Set loading to false once localStorage is accessed and state is updated

    } else {
      setLoading(false)
    }

    // Cleanup function to clear localStorage
    return () => {
      localStorage.removeItem('shoppingCart');
    };
  }, []);

  useEffect(() => {
    if (!loading) {
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
  }, [loading]);

  return (
    <>
      { loading ? <div>Loading...</div> : <>
          <div className="text-white">Thank you for your order, {customerName}!</div>
          <br />
          <div>We look forward to seeing you at {selectedPickUpTime}</div>
          <div>on <OrderDate orderDate={currentCartDate} dayOfWeek={dayOfWeek}/>.</div>
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