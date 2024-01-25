"use client";

import React from 'react'

const ShoppingCartLink = ({ className }) => {
  // Access the shopping cart in local storage
  const currentCart = JSON.parse(localStorage.getItem('shoppingCart'));

  return (
    (currentCart ? <a className={className} href="/order/cart">Cart</a> : <></>)
  )
}

export default ShoppingCartLink