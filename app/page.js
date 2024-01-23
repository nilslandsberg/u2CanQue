import React from 'react';
import Image from 'next/image';
import WelcomeComponent from './components/WelcomeComponent';


export default function Home() {
  return (
    <>
      <main>
        <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
          <div className="relative z-30 p-5 text-2xl  
            text-white text-center">
            <Image src='/images/U2CanQueLogo.svg' alt="logo" width={400} height={400} />
          </div>
          <video
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/brisketVideo.mp4" />
          </video>
        </div>
        <WelcomeComponent />
      </main>
    </>
  );
}
