"use client";

import React from 'react';
import { useModal } from '../contexts/ModalContext';
import { toast } from 'react-toastify';

const AddToCartButton = () => {
  const { modalItemToCart, modalItem, setModalMessage, closeModal } = useModal();
  
  const successMessage = (item) => toast.success(`${item} Added to Cart`);


  const handleAddToCart = () => {
    // Edge Cases to make sure user is not able to add item to cart without making selections in the dropdown menus
    
    if (modalItem.options && (!modalItemToCart.options || Object.keys(modalItemToCart.options).length === 0 || Object.values(modalItemToCart.options).some(value => value === "null"))) {
      setModalMessage("Please select options before adding to the cart.");
      return;
    }

    if ((modalItem.options && Object.keys(modalItem.options).length >= 2) && Object.keys(modalItemToCart.options).length === 1) {
      setModalMessage("Please select all options before adding to the cart.");
      return;
    }
    
    if (modalItem.size && (modalItem.size.length > 0 && modalItemToCart.size === "")) {
      setModalMessage("Please select a size before adding to the cart");
      return;
    }
    
    

    if (modalItem.bread && (!modalItemToCart.bread || Object.keys(modalItemToCart.bread).length === 0 || Object.values(modalItemToCart.bread).some(value => value === "null"))) {
      setModalMessage("Please select a bread option before adding to the cart.");
      return;
    }
    
    if ((modalItem.oneSide && (!modalItemToCart.sideOne || modalItemToCart.sideOne === "null")) || (modalItem.twoSides && (!modalItemToCart.sideOne || modalItemToCart.sideOne === "null" || !modalItemToCart.sideTwo || modalItemToCart.sideTwo === "null"))) {
      setModalMessage("Please select your side(s) before adding to the cart.");
      return;
    }  

    if (modalItem.holiday) {
      const currentCart = JSON.parse(localStorage.getItem('holidayShoppingCart'));

      currentCart.items = currentCart.items || [];

      currentCart.items.push(modalItemToCart);

      localStorage.setItem('holidayShoppingCart', JSON.stringify(currentCart));
    } else {
      // Access the shopping cart in local storage
      const currentCart = JSON.parse(localStorage.getItem('shoppingCart'));

      // Initialize "items" as an empty array if it doesn't exist
      currentCart.items = currentCart.items || [];

      // Add the item to the cart
      currentCart.items.push(modalItemToCart);

      // Save the updated cart to local storage
      localStorage.setItem('shoppingCart', JSON.stringify(currentCart));
    }

    // Reset the message
    setModalMessage('');
    closeModal();
    successMessage(modalItem.name);
  }


  return (
    <div>
      <button
        className="z-30 py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
