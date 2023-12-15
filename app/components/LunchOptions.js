"use client";

import Image from 'next/image';
import React, { useEffect } from 'react';
import { lunchOptions } from '../menu-data';
import parse from 'html-react-parser';
import AddToOrderButton from './AddToOrderButton';
import { useDispatch, useSelector } from 'react-redux';
import { getSidesModifiers } from '@/redux/features/clover-api-call-slice';
import { renderMenuItems } from '../utils/renderMenuItems';

const LunchOptions = () => {
  const modifiers = useSelector((state) => state.modifierDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSidesModifiers()); // Dispatch action when component mounts
  }, []);

  return (
    <>
      <div className="z-30 p-5 text-2xl text-white  bg-slate-600 text-center">
        Lunch Options
      </div>
      {renderMenuItems(lunchOptions)}
    </>
  );
};

export default LunchOptions;
