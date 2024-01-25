import React from 'react';
import { useModal } from '../contexts/ModalContext';

const AddToCartButton = () => {
  const { modalItemToCart, modalItem, setModalMessage } = useModal();

  const handleAddToCart = () => {
    // Edge Cases to make sure user is not able to add item to cart without making selections in the dropdown menus
    if (modalItem.options && (modalItemToCart.options === null || Object.keys(modalItemToCart.options).length ===0)) {
      setModalMessage("Please select options before adding to the cart.");
      return;
    }

    if ((modalItem.options && Object.keys(modalItem.options).length >= 2)  &&  Object.keys(modalItemToCart.options).length === 1) {
      setModalMessage("Please select all options before adding to the cart.");
      return;
    }

    if (modalItem.size && modalItemToCart.size === null) {
      setModalMessage("Please select a size before adding to the cart.");
      return;
    }

    // Update the shopping cart logic here
    const currentCart = JSON.parse(localStorage.getItem('shoppingCart'));
    
    setModalMessage(''); // Reset the message if conditions are met
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
