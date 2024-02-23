import EasterSpecials from '@/app/components/EasterSpecials';
import OrderModal from '@/app/components/OrderModal';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const page = () => {

  return (
    <>
        <div className="relative flex flex-col items-center pt-[75px] min-h-screen bg-black">
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