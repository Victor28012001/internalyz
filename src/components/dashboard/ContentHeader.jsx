import React from 'react'

const ContentHeader = () => {
  return (
    <div className="flex flex-row w-full justify-between px-[13px] items-center content-center h-[40px]">
      <h3 className="font-semibold text-[#17106B] font-['Poppins'] font-[700] text-[16px] leading-[24px] self-center">Conversations</h3>
      <div className="flex flex-row justify-around gap-x-0.5">
        <input type="text"
          className=' bg-[#D9D9D9] rounded-[5px] h-[25px] w-[182px] py-[4px] px-[4px]'
        />
        <><button className=" bg-[#17106B] rounded content-center items-center w-[39px] h-[25px]"><img src="Union.svg" alt="" className=" ml-[12px]"/></button></>
      </div>

      <div className="flex flex-row">

        <h5 className=" text-sm font-bold">Sort</h5>
        <img src="Vector(4).svg" alt="" />
      </div>

    </div>
  )
}

const ContentHeader1 = () => {
  return (
    <div className="flex flex-row w-full justify-between px-[13px] items-center content-center h-[40px]">
      <h3 className="font-semibold text-[#17106B] font-['Poppins'] font-[700] text-[16px] leading-[24px] self-center">Agents</h3>
      <div className="flex flex-row justify-around gap-x-0.5">
        <input type="text"
          className=' bg-[#D9D9D9] rounded-[5px] h-[25px] w-[182px] py-[4px] px-[4px]'
        />
        <><button className=" bg-[#17106B] rounded content-center items-center w-[39px] h-[25px]"><img src="Union.svg" alt="" className=" ml-[12px]"/></button></>
      </div>

      <div className="flex flex-row">

        <h5 className=" text-sm font-bold">Sort</h5>
        <img src="Vector(4).svg" alt="" />
      </div>

    </div>
  )
}

export {ContentHeader, ContentHeader1}
