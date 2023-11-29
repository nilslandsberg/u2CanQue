import React from 'react'

export default function About() {
  return (
    <>
      <main>
        <div className="relative flex flex-col items-center pt-[100px] h-screen overflow-hidden bg-black">
          <div className="divide-y-2 divide-double divide-white w-full">
            <div className="text-white z-30 py-5 text-center">About</div>
            <div className="z-30 p-5 text-2xl text-white text-center">CONTENT HERE</div>
          </div>
        </div>
      </main>
    </>
  )
}