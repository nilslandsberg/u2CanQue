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
  };

  return (
    <ModalContext.Provider value={{ modalItem, isModalOpen, openModal, closeModal, modalItemOptions, modalItemBread, modalItemSideOne, modalItemSideTwo, setModalItemOptions, setModalItemBread, setModalItemSideOne, setModalItemSideTwo }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
