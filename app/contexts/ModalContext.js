"use client";

import React, { createContext, useContext, useState } from 'react';

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
  };

  const modalItemToCart = {
    item: modalItem?.name || null,
    options: modalItemOptions,
    bread: modalItemBread,
    sideOne: modalItemSideOne,
    sideTwo: modalItemSideTwo,
    size: modalItemSize,
    quantity: modalItemQuantity
  }

  return (
    <ModalContext.Provider value={{ modalItem, isModalOpen, openModal, closeModal, modalItemToCart, modalItemOptions, modalItemBread, modalItemSideOne, modalItemSideTwo, modalItemSize, modalItemQuantity, modalMessage, setModalItemOptions, setModalItemBread, setModalItemSideOne, setModalItemSideTwo, setModalItemSize, setModalItemQuantity, setModalMessage }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
