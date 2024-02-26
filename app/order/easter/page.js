"use client";

import EasterSpecials from '@/app/components/EasterSpecials';
import HolidayPickUpDay from '@/app/components/HoidayPickUpDay';
import OrderModal from '@/app/components/OrderModal';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const page = () => {

  return (
    <>
        <div className="relative flex flex-col items-center pt-[75px] min-h-screen bg-black">
          <HolidayPickUpDay holiday="Easter" />
          <div className="divide-y-2 divide-double divide-white w-full">
            <EasterSpecials />
          </div>
        </div>
        <OrderModal />
        <ToastContainer autoClose={2000} theme="dark" />
    </>
  )
}

export default page