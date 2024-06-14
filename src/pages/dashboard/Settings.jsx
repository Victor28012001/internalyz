import React from 'react'
import items from "../../data/settings.json"

import SettingsItem from './SettingsItem'
import Dashboards from '../../Layouts/dashboard/Dashboards';
import { FaSortDown } from "react-icons/fa6";

const Settings = () => {

  

  return (
    <Dashboards>
    <div className='flex w-full'>
      <div className='flex flex-col w-[75%] mt-[80px] pr-[40%]'>
      <h1 className="font-['Poppins'] font-[700] text-[24px] leading-[36px] text-[#344266] mb-2 flex self-start">Settings</h1>
        {items.map((item, index) =><SettingsItem key={index} item={item} />)}
      </div>
      <div className=" flex flex-col w-[20%] mt-[30px] h-[20%] justify-between">
        <div className="flex flex-row h-1/8 bg-grey justify-end">
          <h5 className="text-[#818485] font-['Poppins'] font-[600] text-[20px] leading-[30px]">Agent:<span className='text-[#818485] font-bold'>Admin</span></h5>
          <img src="Vector(2).svg" alt="" />
        </div>


      </div>
    </div>
    </Dashboards>
  )
}

export default Settings
