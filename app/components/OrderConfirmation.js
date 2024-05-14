"use client";

import React, { useEffect, useState } from 'react'
import OrderDate from './OrderDate';
import { useRouter } from 'next/navigation';
import { capitalizeFirstLetter } from '../utils/stringManipulation';

const OrderConfirmation = () => {
  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);
  const [orderDetails, setOrderDetails] = useState({
    currentCartDate: null,
    selectedPickUpTime: null,
    dayOfWeek: null,
    customerName: null,
    customerInfo: null,
    currentCartItems: null,
    orderTotal: null,
    holidayOrder: false,
    holiday: null,
    standardOrder: false,
  })
  const router = useRouter();

  useEffect(() => {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    const holidayShoppingCart = JSON.parse(localStorage.getItem('holidayShoppingCart'));
    
    // if (firstLoad) { // Check if it's not the first load
    //   if (!shoppingCart && !holidayShoppingCart) {
    //     router.push('/');
    //     return; // Exit the useEffect
    //   }
    // }
  
    // Check if shoppingCart exists in localStorage and if it has items. Update local state accordingly.
    if (shoppingCart && shoppingCart.items && shoppingCart.items.length >= 0) {
      setOrderDetails({
        currentCartDate: shoppingCart.date,
        selectedPickUpTime: shoppingCart.pickUpTime,
        dayOfWeek: shoppingCart.dayOfWeek,
        customerName: shoppingCart.customer.firstName,
        customerInfo: shoppingCart.customer,
        currentCartItems: shoppingCart.items,
        orderTotal: shoppingCart.orderTotal,
        standardOrder: true
      })
      setLoading(false); // Set loading to false once localStorage is accessed and state is updated
      setFirstLoad(false);
  
      // Remove shoppingCart from localStorage after it's used
      localStorage.removeItem('shoppingCart');
      // if there is no shoppingCart, check if there is a holidayShoppingCart
    } else if (holidayShoppingCart && holidayShoppingCart.items && holidayShoppingCart.items.length >= 0) {
      const capitalizedHoliday = capitalizeFirstLetter(holidayShoppingCart.holiday);
      // Update orderDetails with holidayOrder information
      setOrderDetails({
        holidayOrder: true,
        holiday: capitalizedHoliday,
        currentCartDate: holidayShoppingCart.date,
        selectedPickUpTime: holidayShoppingCart.pickUpTime,
        customerName: holidayShoppingCart.customer.firstName,
        customerInfo: holidayShoppingCart.customer,
        currentCartItems: holidayShoppingCart.items,
        orderTotal: holidayShoppingCart.orderTotal,
      })
      setLoading(false);
      setFirstLoad(false);
     
      // Remove holidayShoppingCart from localStorage after it's used
      localStorage.removeItem('holidayShoppingCart');
    }
  
    // Cleanup function to clear localStorage
    // return () => {
    //   localStorage.removeItem('shoppingCart');
    //   localStorage.removeItem('holidayShoppingCart');
    // };
  }, []);
  
  useEffect(() => {
    // if localStorage is not loading and it is a standard order create a request body with order information to send to database
    if (!loading && orderDetails.standardOrder) {
      const requestBody = {
        date: orderDetails.currentCartDate,
        pickUpTime: orderDetails.selectedPickUpTime,
        customer: orderDetails.customerInfo,
        items: orderDetails.currentCartItems,
        orderTotal: orderDetails.orderTotal
      };
      // Make a POST request to the server after the local state is updated
      fetch('https://u2canque-server.onrender.com/api/order/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
      .then(response => {
        if (response.ok) {
          setFirstLoad(false)
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
    // if localStorage is not loading, create a requestBody with holidayOrder details to send to database
    if (!loading && orderDetails.holidayOrder) {
      const requestBody = {
        holiday: orderDetails.holiday,
        year: new Date().getFullYear(),
        pickUpDate: orderDetails.currentCartDate,
        pickUpTime: orderDetails.selectedPickUpTime,
        customer: orderDetails.customerInfo,
        items: orderDetails.currentCartItems,
        orderTotal: orderDetails.orderTotal
      };
      // Make a POST request to the server after the local state is updated
      fetch('https://u2canque-server.onrender.com/api/order/holiday', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
      .then(response => {
        if (response.ok) {
          setFirstLoad(false);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }, [orderDetails.standardOrder, orderDetails.holidayOrder]);

  return (
    <>
      { loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
        </div>
      ) : <>
          <div className="text-white">Thank you for your order, {orderDetails.customerName}!</div>
          <br />
          <div>We look forward to seeing you at {orderDetails.selectedPickUpTime}</div>
          <div>on { !orderDetails.holidayOrder ? <OrderDate orderDate={orderDetails.currentCartDate} dayOfWeek={orderDetails.dayOfWeek}/> : orderDetails.currentCartDate }.</div>
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