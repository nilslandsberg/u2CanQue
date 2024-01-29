"use client";

import React, { createContext, useContext, useState } from 'react';
import { chickenPriceModifiers, chickenWingPriceModifiers } from '../utils/stringManipulation';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalItem, setModalItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItemOptions, setModalItemOptions] = useState(null);
  const [modalItemBread, setModalItemBread] = useState(null);
  const [modalItemSideOne, setModalItemSideOne] = useState(null);
  const [modalItemSideTwo, setModalItemSideTwo] = useState(null);
  const [modalItemSize, setModalItemSize] = useState(null);
  const [modalItemQuantity, setModalItemQuantity] = useState(1);
  const [modalMessage, setModalMessage] = useState("");

  const openModal = (item) => {
    setModalItem(item)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalItem(null);
    setIsModalOpen(false);
    setModalItemOptions(null);
    setModalItemBread(null);
    setModalItemSideOne(null);
    setModalItemSideTwo(null);
    setModalItemSize(null);
    setModalMessage("");
    setModalItemQuantity(1);
  };

  const modalItemOrdered = {
    name: modalItem?.name || null,
    options: modalItemOptions,
    bread: modalItemBread,
    sideOne: modalItemSideOne,
    sideTwo: modalItemSideTwo,
    size: modalItemSize,
    price: (() => {
      // call price modifier functions if the item contains modifiers
      if (modalItem?.name === "BBQ Chicken Meal") {
        console.log("Chicken price calculation")
        return chickenPriceModifiers(modalItemOptions);
      } else if (modalItem?.name === "10 Smoked Jumbo Chicken Wings") {
        return chickenWingPriceModifiers(modalItemOptions);
      } else {
        return modalItem?.price || 0; 
      }
    })(),
    quantity: modalItemQuantity,
  }

  // Calculate total price and store it as a number w/o decimal
  modalItemOrdered.total = modalItemOrdered.price * modalItemOrdered.quantity * 100;

  const modalItemToCart = Object.fromEntries(
    Object.entries(modalItemOrdered)
      .filter(([key, value]) => value !== null)
  );

  return (
    <ModalContext.Provider value={{ modalItem, isModalOpen, openModal, closeModal, modalItemOrdered, modalItemToCart, modalItemOptions, modalItemBread, modalItemSideOne, modalItemSideTwo, modalItemSize, modalItemQuantity, modalMessage, setModalItemOptions, setModalItemBread, setModalItemSideOne, setModalItemSideTwo, setModalItemSize, setModalItemQuantity, setModalMessage }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
