"use client";
import React, { useEffect, useState } from 'react';

const ShoppingCartLink = ({ className }) => {
  const [ currentCart, setCurrentCart ] = useState("null");

  useEffect(() => {
    const shoppingCart = localStorage.getItem('shoppingCart');
    if (shoppingCart) {
      setCurrentCart(shoppingCart)
    } else {
      setCurrentCart("null");
    }
  }, [])

  return (
    ((currentCart !== "null") ? <a className={className} href="/order/cart">Cart</a> : <></>)
  );
};
export default ShoppingCartLink;