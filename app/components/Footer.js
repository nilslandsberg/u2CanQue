import React from 'react'
import FacebookLink from './FacebookLink'
import Image from 'next/image'

function Footer() {
  return (
    <div className="footer-container">
      <div className={"bg-slate-600 opacity-90 dar:bg-gray-900 w-full z-40 top-0 left-0 border-t border-gray-200 dark:border-gray-600 items-center"}>
        <div className="flex items-center justify-center py-4">
          <Image src='/images/U2CanQueLogo.svg' alt="logo" width={175} height={175} />
        </div>
        <div className="text-white text-center">u2canque@gmail.com</div>
        <FacebookLink />
      </div>
    </div>
  )
}

export default Footer