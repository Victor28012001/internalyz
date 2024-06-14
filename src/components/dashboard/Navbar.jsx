import React from 'react'
import logo from "../../assets/logo3.png"

const Navbar = () => {
  return (
    <div className="flex flex-row w-[100%] h-[62px] justify-between bg-[#Fff] items-center px-[80px] border-b-[2px]">
      <div className="flex flex-row items-center">
        <img src="nanoChat-logo.svg" alt="" />
        <div className="flex flex-row justify-around items-center h-[72px]">
          <img src={logo} alt="" height={52} width={52}/>
          <h3 className="w-[96px] h-[26px] font-['Poppins'] font-[700] text-[32px] leading-[48px] text-[#17106B]">Internalyze</h3>
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
