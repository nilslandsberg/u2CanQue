"use client";

import React from 'react';
import { useModal } from '../contexts/ModalContext';
import { toast } from 'react-toastify';

const AddToCartButton = () => {
  const { modalItemToCart, modalItem, setModalMessage, closeModal } = useModal();
  
  const successMessage = (item) => toast.success(`${item} Added to Cart`);

  const areAllArraysEmpty = (options) => {
    return options && Object.values(options).every(array => Array.isArray(array) && array.length === 0);
  };

  const handleAddToCart = () => {
    console.log(modalItem);
    
    if (modalItem.options) {
      if (!areAllArraysEmpty(modalItem.options)) {
        const optionsToCheck = Object.keys(modalItem.options).filter(key => modalItem.options[key].length > 0);

        for (let option of optionsToCheck) {
          if (!modalItemToCart.options || !modalItemToCart.options[option] || modalItemToCart.options[option] === "null") {
            setModalMessage(`Please select a ${option} option before adding to the cart.`);
            return;
          }
        }

        if (optionsToCheck.length > 1 && Object.keys(modalItemToCart.options).length < optionsToCheck.length) {
          setModalMessage("Please select all options before adding to the cart.");
          return;
        }
      }
    }

    if (modalItem.size && (modalItem.size.length > 0 && modalItemToCart.size === "")) {
      setModalMessage("Please select a size before adding to the cart");
      return;
    }

    if (modalItem.bread && (!modalItemToCart.bread || Object.keys(modalItemToCart.bread).length === 0 || Object.values(modalItemToCart.bread).some(value => value === "null"))) {
      setModalMessage("Please select a bread option before adding to the cart.");
      return;
    }

    if ((modalItem.oneSide && (!modalItemToCart.sideOne || modalItemToCart.sideOne === "null")) || 
        (modalItem.twoSides && (!modalItemToCart.sideOne || modalItemToCart.sideOne === "null" || !modalItemToCart.sideTwo || modalItemToCart.sideTwo === "null"))) {
      setModalMessage("Please select your side(s) before adding to the cart.");
      return;
    }

    if (modalItem.holiday) {
      const currentCart = JSON.parse(localStorage.getItem('holidayShoppingCart')) || { items: [] };

      currentCart.items.push(modalItemToCart);

      localStorage.setItem('holidayShoppingCart', JSON.stringify(currentCart));
    } else {
      const currentCart = JSON.parse(localStorage.getItem('shoppingCart')) || { items: [] };

      currentCart.items.push(modalItemToCart);

      localStorage.setItem('shoppingCart', JSON.stringify(currentCart));
    }

    // Reset the message
    setModalMessage('');
    closeModal();
    successMessage(modalItem.name);
  };

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