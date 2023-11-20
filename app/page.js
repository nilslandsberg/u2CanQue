import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import EnterSiteButton from './components/EnterSiteButton';

export default function Home() {
  return (
    <>
      <div className="navbar-container">
        <NavBar />
      </div>
      <main>
        <div className="relative flex flex-col items-center justify-center h-screen mb-12 overflow-hidden">
          <div className="relative z-30 p-5 text-2xl  
            text-white text-center">
            <div className="text-4xl font-bold mb-4">U 2 Can Que</div>
            <div className="text-2xl">Premium BBQ Supplies</div>
          </div>
          <div className="mt-4"> {/* Adjust the margin to your preference */}
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
        <Footer />
      </main>
    </>
  );
}
