import NotFound from '@/app/components/NotFound'
import OrderConfirmation from '@/app/components/OrderConfirmation'
import React from 'react'

const page = () => {
  
  return (
    <NotFound />
    // <>
    //   <div className="bg-black text-white fixed top-0 left-0 right-0 z-30 pt-[90px]">
    //     <div className="text-2xl font-bold pb-2 flex flex-row text-center justify-center items-center border-b border-white overflow-x-auto">
    //       <p>Order Confirmation</p>
    //     </div>
    //   </div>
    //   <div className="relative flex flex-col text-white items-center pt-[175px] min-h-screen bg-black">
    //     <OrderConfirmation />
    //   </div>
    // </>
  )
}

export default page