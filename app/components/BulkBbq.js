import React, { useState, useEffect } from 'react';
import { renderBulkBbq, renderSides } from '../utils/renderMenuItems';

const BulkBbq = () => {
  const [bulkBbq, setBulkBbq] = useState([]);
  const [sides, setSides] = useState([]);

  useEffect(() => {
    const fetchBulkBbq = async () => {
      try {
        const response = await fetch('https://u2canque-server.onrender.com/api/bulk-bbq');
        const data = await response.json();
        setBulkBbq(data);
      } catch (error) {
        console.error('Error fetching bulk BBQ:', error);
      }
    };

    const fetchSides = async () => {
      try {
        const response = await fetch('https://u2canque-server.onrender.com/api/sides');
        const data = await response.json();
        setSides(data);
      } catch (error) {
        console.error('Error fetching sides:', error);
      }
    };

    fetchBulkBbq();
    fetchSides();
  }, []);

  return (
    <>
      <div className="z-30 bg-slate-600 p-5 text-2xl text-white text-center" id="bulk-bbq">
        Bulk BBQ (Frozen)
      </div>
      {renderBulkBbq(bulkBbq)}
      <div className="z-30 bg-slate-600 p-5 text-2xl text-white text-center" id="appetizers">
        Sides
      </div>
      {renderSides(sides)}
    </>
  );
}

export default BulkBbq;
