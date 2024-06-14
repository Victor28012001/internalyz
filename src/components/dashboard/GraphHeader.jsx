import React from 'react'

const GraphHeader = () => {
  return (
    <ul className="flex flex-row w-full justify-around items-start">
      <li className='text-xs'>Live Visitors</li>
      <li className='flex flex-row bg-[#DAEBFF] rounded font-semibold text-sm px-3 py-1'>Days
        <select name="" id="" className=' bg-[#DAEBFF]'></select>
      </li>
    </ul>
  )
}

export default GraphHeader
