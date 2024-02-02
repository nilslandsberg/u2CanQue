import React from 'react'
import { sendOrder } from '../utils/send-order'
import { useRouter } from 'next/navigation'

const CheckOutButton = ({ selectedTime, setSelectTimeMessage, date, cartItems, orderTotal }) => {
  const router = useRouter();

  const handleCheckOut = async () => {
    const lineItems = []

    const lineItem = (item) => {
      return {
        name: item.name,
        unitQty: item.quantity,
        price: item.total
      }
    }

    // Map over cartItems and push the transformed objects into lineItems array
    cartItems.forEach(item => {
      lineItems.push(lineItem(item))
    })

    const order = {
      customer: {},
      shoppingCart: {
        lineItems: lineItems
      }
    }

    if (selectedTime && selectedTime !== null) {
      const checkOutPage = await sendOrder(order);
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

export default CheckOutButton