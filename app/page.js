import React from 'react';
import EnterSiteButton from './components/EnterSiteButton';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        <div className="relative flex flex-col items-center justify-center h-screen mb-12 overflow-hidden">
          <div className="relative z-30 p-5 text-2xl  
            text-white text-center">
            <Image src='/images/U2CanQueLogo.svg' alt="logo" width={400} height={400} />
          </div>
          <div className="mt-4"> 
            <EnterSiteButton />
          </div>
          <video
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            autoPlay
            loop
            muted
          >
            <source src="/videos/brisketVideo.mp4" />
          </video>
        </div>
      </main>
    </>
  );
}
