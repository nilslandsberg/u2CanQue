import React, { useState, useEffect } from 'react';
import { renderMenuItems } from '../utils/renderMenuItems';

const AppetizerMenu = () => {
  const [appetizers, setAppetizers] = useState([]);

  useEffect(() => {
    const fetchAppetizers = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/appetizers/');
        const data = await response.json();
        setAppetizers(data);
      } catch (error) {
        console.error('Error fetching appetizers:', error);
      }
    };

    fetchAppetizers();
  }, []);

  return (
    <>
      <div className="z-30 p-5 text-2xl bg-slate-600 text-white text-center" id="appetizers">
        Appetizers
      </div>
      {renderMenuItems(appetizers)}
    </>
  );
};

export default AppetizerMenu;