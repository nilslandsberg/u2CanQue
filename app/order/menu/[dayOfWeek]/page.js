'use client'

import AppetizerMenu from '@/app/components/AppetizerMenu';
import BulkBbq from '@/app/components/BulkBbq';
import LunchOptions from '@/app/components/LunchOptions';
import MenuLinks from '@/app/components/MenuLinks';
import NotFound from '@/app/components/NotFound';
import OrderModal from '@/app/components/OrderModal';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const page = ({ params }) => {
  const { dayOfWeek } = params

  return (
    <NotFound />
    // <>
    //     <MenuLinks />
    //     <div className="relative flex flex-col items-center pt-[175px] min-h-screen bg-black">
    //       <div className="divide-y-2 divide-double divide-white w-full">
    //         <AppetizerMenu />
    //         <LunchOptions dayOfWeek={dayOfWeek}/>
    //         <BulkBbq />
    //       </div>
    //     </div>
    //     <OrderModal />
    //     <ToastContainer autoClose={2000} theme="dark" />
    // </>
  )
}

export default page