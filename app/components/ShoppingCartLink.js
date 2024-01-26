"use client";
import React from 'react';

const ShoppingCartLink = ({ className }) => {
  // Access the shopping cart in local storage
  const shoppingCart = localStorage.getItem('shoppingCart');
  const currentCart = shoppingCart ? JSON.parse(shoppingCart) : null;

  return (
    (currentCart ? <a className={className} href="/order/cart">Cart</a> : <></>)
  );
};
export default ShoppingCartLink;