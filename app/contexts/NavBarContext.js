"use client";

import React, { createContext, useContext, useState } from 'react';

const NavBarContext = createContext();

export const NavBarContextProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
  return (
    <NavBarContext.Provider value={{ isToggled, setIsToggled, shoppingCart }}>
      {children}
    </NavBarContext.Provider>
  );
};

export const useNavBarContext = () => {
  return useContext(NavBarContext);
};
