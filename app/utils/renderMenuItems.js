import React from 'react'
import AddToOrderButton from '../components/AddToOrderButton'
import Image from 'next/image'

export const renderMenuItems = (array) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 overflow-auto py-5 px-2">
    {array.map((item) => (
      <div
        key={item.id}
        className="max-w-md mx-auto card bg-black p-4 text-white text-center  shadow-md flex flex-col justify-between"
      >
        <div className="relative h-40 mb-2 rounded-md overflow-hidden">
          <Image 
            src={item.image} 
            alt={item.name} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            style={{objectFit: "contain"}} 
          />
        </div>
        <div className="text-lg font-semibold mb-1">{item.name}</div>
        <div className="border-b-2 border-gray-300 mb-2"></div>
        <div className="flex-grow mb-2">{item.description}</div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center">
            <p className="text-orange-600 font-semibold pt-4">Price: ${item.price}</p>
          </div>
          <AddToOrderButton item={item}/>
        </div>
      </div>
    ))}
  </div>
  )
}

export const renderBulkBbq = (array) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 overflow-auto py-5 px-2">
    {array.map((item) => (
      <div
        key={item.id}
        className="max-w-md mx-auto card bg-black p-4 text-white text-center  shadow-md flex flex-col justify-between"
      >
          <div className="relative h-40 mb-2 rounded-md overflow-hidden">
            <Image 
              src={item.image} 
              alt={item.name} 
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              style={{objectFit: "contain"}} 
            />
          </div>
          <div className="text-lg font-semibold mb-1">{item.name}</div>
          <div className="border-b-2 border-gray-300 mb-2"></div>
          <div className="flex-grow mb-2">{item.description}</div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center">
              <p className="text-orange-600 font-semibold pt-4">Price: ${item.pricePerPound} per pound</p>
            </div>
            <AddToOrderButton item={item} />
          </div>
        </div>
      ))}
    </div>
  )
}

export const renderSides = (array) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 overflow-auto py-5 px-2">
    {array.map((item) => (
      <div
        key={item.id}
        className="max-w-md mx-auto card bg-black p-4 text-white text-center  shadow-md flex flex-col justify-between"
      >
        <div className="relative h-40 mb-2 rounded-md overflow-hidden">
          <Image 
            src={item.image} 
            alt={item.name} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            style={{objectFit: "contain"}} 
          />
        </div>
        <div className="text-lg font-semibold mb-1">{item.name}</div>
        <div className="border-b-2 border-gray-300 mb-2"></div>
        <div className="flex-grow mb-2">{item.description}</div>
        <div className="flex flex-row items-end justify-between">
          <div className="flex flex-col items-start ">
            <p className="text-orange-600 font-semibold pt-4">Price:</p>
            <p className="text-orange-600 font-semibold pt-4 indent-2">Pint ${item.price.pint}.00</p>
            <p className="text-orange-600 font-semibold pt-4 indent-2">Quart ${item.price.quart}.00</p>
            <p className="text-orange-600 font-semibold pt-4 indent-2">Half-Pan ${item.price.halfPan}.00</p>
            <p className="text-orange-600 font-semibold pt-4 indent-2">Full-Pan ${item.price.fullPan}.00</p>
          </div>
          <AddToOrderButton item={item} />
        </div>
      </div>
    ))}
  </div>
  )
}