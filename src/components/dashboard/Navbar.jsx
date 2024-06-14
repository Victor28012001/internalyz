import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row w-[100%] h-[92px] justify-between bg-[#Fff] items-center px-[80px] border-b-[2px]">
      <div className="flex flex-row items-center">
        <img src="nanoChat-logo.svg" alt="" />
        <div className="flex flex-col justify-around h-[72px]">
            <h3 className="w-[96px] h-[26px] font-['Poppins'] font-[700] text-[32px] leading-[48px] text-[#17106B]">Nano</h3>
            <h4 className="w-[66px] h-[26px] font-['Poppins'] font-[700] text-[24px] leading-[36px] text-[#3592FF]">Chat</h4>
        </div>
      </div>

      <div className="signout-button">
        <button className="bg-[#3592FF] rounded-[6px] w-[180px] h-[52px]">
            <a href="signout.js" className="font-semibold font-[Poppins] font-[700] text-[20px] text-white">
                Sign out
            </a>
        </button>
      </div>
    </div>
  )
}

export default Navbar
