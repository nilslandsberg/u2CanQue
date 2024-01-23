"use client";

import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalItem, setModalItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItemOptions, setModalItemOptions] = useState(null);
  const [modalItemBread, setModalItemBread] = useState(null);
  const [modalItemSides, setModalItemSides] = useState(null);

  const openModal = (item) => {
    setModalItem(item)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalItem(null);
    setIsModalOpen(false);
    setModalItemOptions(null);
    setModalItemBread(null);
    setModalItemSides(null);
  };

  return (
    <ModalContext.Provider value={{ modalItem, isModalOpen, openModal, closeModal, modalItemOptions, modalItemBread, modalItemSides, setModalItemOptions, setModalItemBread, setModalItemSides }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
