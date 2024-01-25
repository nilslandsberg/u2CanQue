import ShoppingCartContents from '@/app/components/ShoppingCartContents'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="bg-black text-white fixed top-0 left-0 right-0 z-30 pt-[90px]">
        <div className='text-2xl font-bold italic text-center py-2 divide-white'>
          <p>Cart</p>
        </div>
      </div>
      <div className="relative flex flex-col items-center pt-[175px] min-h-screen bg-black">
          <div className="divide-y-2 divide-double divide-white w-full">
            <ShoppingCartContents />
          </div>
        </div>
    </>
  )
}

export default page