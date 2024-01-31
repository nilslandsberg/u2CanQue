"use client";

import { DateTime } from 'luxon';
import React, { createContext, useContext, useEffect, useState } from 'react';

const NavBarContext = createContext();

export const NavBarContextProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [shoppingCart, setShoppingCart] = useState(null);

  useEffect(() => {
    // Access localStorage after component mounts
    const cart = JSON.parse(localStorage.getItem('shoppingCart'));
    if (cart && cart.date === "") {
      localStorage.removeItem('shoppingCart');
      return;
    }
 
    if (cart && cart.date) {
      const cartDate = DateTime.fromISO(cart.date);
      const currentDateTime = DateTime.now();

      const isTomorrow = currentDateTime.plus({ days: 1 }).toISODate() === cartDate.toISODate();

      const isAfter530pm = currentDateTime.hour >= 17 && currentDateTime.minute >= 30;

      if (isTomorrow && isAfter530pm) {
        localStorage.removeItem('shoppingCart');
      }
      return;
    }
    
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
