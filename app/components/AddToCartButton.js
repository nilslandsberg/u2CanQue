import React from 'react';
import { useModal } from '../contexts/ModalContext';

const AddToCartButton = () => {
  const { modalItemToCart, modalItem, setModalMessage } = useModal();

  const handleAddToCart = () => {
    if (modalItem.options && modalItemToCart.options === null) {
      setModalMessage("Please select options before adding to the cart.");
    } else {
      // Update the shopping cart logic here
      const currentCart = JSON.parse(localStorage.getItem('shoppingCart'));
      console.log(currentCart);
      setModalMessage(''); // Reset the message if conditions are met
    }
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
