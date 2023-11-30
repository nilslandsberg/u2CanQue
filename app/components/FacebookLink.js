import Image from 'next/image'
import React from 'react'

const FacebookLink = () => {
  return (
    <div className="flex items-center justify-center pt-4 pb-6">
      <a href="https://www.facebook.com/groups/788292362944024" target="_blank" rel="noopener noreferrer">
        <Image src='/images/iconmonstr-facebook-6.svg' alt="facebook" width={40} height={40} />
      </a>
    </div>
  )
}

export default FacebookLink