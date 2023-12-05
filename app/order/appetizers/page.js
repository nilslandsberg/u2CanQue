import AppetizerMenu from '@/app/components/AppetizerMenu'
import MenuLinks from '@/app/components/MenuLinks'
import React from 'react'

const page = () => {
  return (
    <>
      <MenuLinks />
      <div className="relative flex flex-col items-center pt-[180px] min-h-screen bg-black">
        <div className="divide-y-2 divide-double divide-white w-full">
          <AppetizerMenu />
        </div>
      </div>
    </>
  )
}

export default page