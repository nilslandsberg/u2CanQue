import AppetizerMenu from '@/app/components/AppetizerMenu'
import BulkBbq from '@/app/components/BulkBbq'
import LunchOptions from '@/app/components/LunchOptions'
import MenuLinks from '@/app/components/MenuLinks'
import { ModalProvider } from '@/app/contexts/ModalContext'
import React from 'react'

const page = ({ params }) => {
  const { dayOfWeek } = params
  return (
    <>
    <ModalProvider>
      <MenuLinks />
      <div className="relative flex flex-col items-center pt-[175px] min-h-screen bg-black">
        <div className="divide-y-2 divide-double divide-white w-full">
          <AppetizerMenu />
          <LunchOptions dayOfWeek={dayOfWeek}/>
          <BulkBbq />
        </div>
      </div>
    </ModalProvider>

    </>
  )
}

export default page