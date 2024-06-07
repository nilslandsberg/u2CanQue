import React from 'react'
import { sendOrder } from '../utils/send-order'
import { useRouter } from 'next/navigation'

const HolidayCheckOutButton = ({ selectedTime, setSelectTimeMessage, cartItems, customerInformation, orderTotal, selectedPickUpDate }) => {
  const router = useRouter();

  const handleCheckOut = async () => {
    
    const lineItems = []

    const lineItem = (item) => {
      return {
        name: item.name,
        unitQty: item.quantity,
        price: parseInt(item.price.replace(".", ""))
      }
    }

    // Map over cartItems and push the transformed objects into lineItems array
    cartItems.forEach(item => {
      lineItems.push(lineItem(item))
    })

    // Check if any customer information is missing
    if (
      !customerInformation.firstName ||
      !customerInformation.lastName ||
      !customerInformation.phone ||
      !customerInformation.email
    ) {
      setSelectTimeMessage("Please provide all customer information.");
      return;
    }

    if (!selectedPickUpDate) {
      setSelectTimeMessage("You must select a date to pick up your order.");
      return
    }
    
    const order = {
      customer: customerInformation,
      shoppingCart: {
        lineItems: lineItems
      }
    }
   
    if (selectedTime && selectedTime !== null) {
      // Retrieve existing shoppingCart from localStorage
      const existingCart = JSON.parse(localStorage.getItem('holidayShoppingCart')) || {};

      // Update shoppingCart with customer information and order total
      existingCart.customer = customerInformation;
      existingCart.orderTotal = orderTotal;

      // Save the updated shoppingCart back to localStorage
      localStorage.setItem('holidayShoppingCart', JSON.stringify(existingCart));
      // Send order to Clover
      const checkOutPage = await sendOrder(order);
      // Through an alert to the user
      const checkoutMessage = alert('You will now be forwarded to a secure payment site to process your order.\n\nAfter your payment is processed, DO NOT close the browser until the order confirmation page has loaded.')
      // Redirect user to Clover hosted checkout
      router.push(checkOutPage)
      setSelectTimeMessage("");
    } else {
      setSelectTimeMessage("You must select a pickup time to checkout.");
    }
  }

  return (
    <button
        className="z-30 py-2 px-3 bg-green-600 rounded text-gray-900 hover:bg-green-400 hover:text-white transition duration-300 mb-4"
        onClick={handleCheckOut}
      >
        Checkout
      </button>
  )
}

export default HolidayCheckOutButton