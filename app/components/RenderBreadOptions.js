import React from 'react'

const RenderBreadOptions = ({ bread }) => {
  return (
    <div className="flex flex-col text-white pt-2">
      {Object.keys(bread).map((key, i) => (
        <div key={i} className="ml-4">
          <span className="font-semibold">{capitalizeFirstLetter(key)}: </span>
          <span>{bread[key]}</span>
        </div>
      ))}
    </div>
  )
}

export default RenderBreadOptions