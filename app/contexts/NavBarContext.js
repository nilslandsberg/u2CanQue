"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

const NavBarContext = createContext();

export const NavBarContextProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [shoppingCart, setShoppingCart] = useState(null);

  useEffect(() => {
    // Access localStorage after component mounts
    const cart = JSON.parse(localStorage.getItem('shoppingCart'));
    setShoppingCart(cart);
  }, []);
  
  return (
    <NavBarContext.Provider value={{ isToggled, setIsToggled, shoppingCart }}>
      {children}
    </NavBarContext.Provider>
  );
};

export const useNavBarContext = () => {
  return useContext(NavBarContext);
};
