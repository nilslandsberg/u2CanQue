import React from 'react'
import AddToOrderButton from '../components/AddToOrderButton'
import Image from 'next/image'

export const renderMenuItems = (array) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-auto py-5 px-2">
    {array.map((item) => (
      <div
        key={item.id}
        className="card bg-slate-600 p-4 text-white text-center rounded-md shadow-md border border-white flex flex-col justify-between"
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-auto py-5 px-2">
      {array.map((item) => (
        <div
          key={item.id}
          className="card bg-slate-600 p-4 text-white text-center rounded-md shadow-md border border-white flex flex-col justify-between mx-auto"
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
              <p className="text-orange-600 font-semibold pt-4">Price: ${item.price} per pound</p>
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-auto py-5 px-2">
    {array.map((item) => (
      <div
        key={item.id}
        className="card bg-slate-600 p-4 text-white text-center rounded-md shadow-md border border-white flex flex-col justify-between"
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
            <p className="text-orange-600 font-semibold pt-4 indent-2">Pint ${item.price.pint}</p>
            <p className="text-orange-600 font-semibold pt-4 indent-2">Quart ${item.price.quart}</p>
            <p className="text-orange-600 font-semibold pt-4 indent-2">Half Pan ${item.price.halfPan}</p>
            <p className="text-orange-600 font-semibold pt-4 indent-2">Full Pan ${item.price.fullPan}</p>
          </div>
          <AddToOrderButton item={item} />
        </div>
      </div>
    ))}
  </div>
  )
}