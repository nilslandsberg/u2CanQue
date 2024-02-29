"use client";

import React, { useEffect, useState } from 'react'
import OrderDate from './OrderDate';
import { useRouter } from 'next/navigation';

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

  const router = useRouter();

  const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
  const holidayShoppingCart = JSON.parse(localStorage.getItem('holidayShoppingCart'));

  useEffect(() => {
    
    // Check if shoppingCart exists in localStorage and if it has items. Update local state accordingly.
    if (shoppingCart && shoppingCart.items && shoppingCart.items.length >= 0) {
      setCurrentCartDate(shoppingCart.date);
      setSelectedPickUpTime(shoppingCart.pickUpTime);
      setDayOfWeek(shoppingCart.dayOfWeek);
      setCustomerName(shoppingCart.customer.firstName);
      setCustomerInfo(shoppingCart.customer);
      setCurrentCartItems(shoppingCart.items);
      setOrderTotal(shoppingCart.orderTotal);
      setLoading(false); // Set loading to false once localStorage is accessed and state is updated
      // If shoppingCart does not exist, check if holidayShoppingCart exists and has items. Update local state accordingly
    } else if (holidayShoppingCart && holidayShoppingCart.items && holidayShoppingCart.items.length >= 0) {
      setHolidayOrder(true);
      setHoliday(holidayShoppingCart.holiday);
      setCurrentCartDate(holidayShoppingCart.date)
      setSelectedPickUpTime(holidayShoppingCart.pickUpTime);
      setCustomerName(holidayShoppingCart.customer.firstName);
      setCustomerInfo(holidayShoppingCart.customer);
      setCurrentCartItems(holidayShoppingCart.items);
      setOrderTotal(holidayShoppingCart.orderTotal);
      setLoading(false);
    } else {
      // if no shopping cart exists - push user to home page
      router.push('/');
    }

    // Cleanup function to clear localStorage
    return () => {
      localStorage.removeItem('shoppingCart');
      localStorage.removeItme('holidayShoppingCart');
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      if (shoppingCart) {
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

      if (holidayShoppingCart) {
        
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