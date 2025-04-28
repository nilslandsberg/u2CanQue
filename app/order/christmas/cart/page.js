import HolidayholidayShoppingCartContents from '@/app/components/HolidayShoppingCartContents';
import NotFound from '@/app/components/NotFound';
import React from 'react'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  return (
    <NotFound />
    // <>
    //   <div className="bg-black text-white fixed top-0 left-0 right-0 z-30 pt-[90px]">
    //     <div className="text-2xl font-bold pb-2 flex flex-row text-center justify-center items-center border-b border-white overflow-x-auto">
    //       <p>Christmas Holiday Cart</p>
    //     </div>
    //   </div>
    //   <div className="relative flex flex-col items-center pt-[175px] min-h-screen bg-black">
    //     <HolidayholidayShoppingCartContents holiday="christmas" />
    //     <ToastContainer autoClose={2000} theme="dark" />
    //   </div>
    // </>
  )
}

export default page