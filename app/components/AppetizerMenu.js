import Image from 'next/image';
import React from 'react';
import { appetizerData } from '../menu-data';
import parse from 'html-react-parser';
import AddToOrderButton from './AddToOrderButton';
import { renderMenuItems } from '../utils/renderMenuItems';

const AppetizerMenu = () => {
  return (
    <>
      <div className="z-30 p-5 text-2xl bg-slate-600 text-white text-center">
        Appetizers
      </div>
      {renderMenuItems(appetizerData)}
    </>
  );
};

export default AppetizerMenu;
