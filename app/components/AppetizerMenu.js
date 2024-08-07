// import React, { useState, useEffect } from 'react';
// import { renderMenuItems } from '../utils/renderMenuItems';

// const AppetizerMenu = () => {
//   const [appetizers, setAppetizers] = useState([]);

//   useEffect(() => {
//     const fetchAppetizers = async () => {
//       try {
//         const response = await fetch('https://u2canque-server.onrender.com/api/appetizers/');
//         const data = await response.json();
//         setAppetizers(data);
//       } catch (error) {
//         console.error('Error fetching appetizers:', error);
//       }
//     };

//     fetchAppetizers();
//   }, []);

//   return (
//     <>
//       <div className="z-30 p-5 text-2xl bg-slate-600 text-white text-center" id="appetizers">
//         Appetizers
//       </div>
//       {renderMenuItems(appetizers)}
//     </>
//   );
// };

// export default AppetizerMenu;

import React, { useState, useEffect } from 'react';
import { renderMenuItems } from '../utils/renderMenuItems';

const AppetizerMenu = () => {
  const [appetizers, setAppetizers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAppetizers = async () => {
      try {
        const response = await fetch('https://u2canque-server.onrender.com/api/appetizers/');
        const data = await response.json();
        setAppetizers(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching appetizers:', error);
        setIsLoading(false);
      }
    };

    fetchAppetizers();
  }, []);

  return (
    <>
      <div className="z-30 p-5 text-2xl bg-slate-600 text-white text-center" id="appetizers">
        Appetizers
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
        </div>
      ) : (
        renderMenuItems(appetizers)
      )}
    </>
  );
};

export default AppetizerMenu;