import React from 'react'
import {ContentHeader1 }from '../../components/dashboard/ContentHeader';
import { TablesAgents } from '../../components/dashboard/Tables'
import Dashboards from '../../Layouts/dashboard/Dashboards';

const Agents = () => {
  return (
    <Dashboards>
    <div className='flex w-full'>
      <div className='flex flex-col w-[75%] mt-[80px]'>
        <ContentHeader1 />
        <TablesAgents />
        <button className="h-[41px] w-full bg-[#DAEBFF] rounded-[10px] text-[#17106B] font-['Poppins'] font-[700] text-[12px] leading-[18px] mb-[15px]">+ Add New Agent</button>
        <button className="text-[#656375] font-['Poppins'] font-[700] text-[12px] leading-[18px]">See All</button>
      </div>
      <div className=" flex flex-col w-[20%] mt-[30px] h-[20%] justify-between">
        <div className="flex flex-row h-1/8 bg-grey justify-end">
          <h5 className="text-[#818485] font-['Poppins'] font-[600] text-[20px] leading-[30px]">Agent:<span className='text-[#818485] font-bold'>Admin</span></h5>
          <img src="Vector(2).svg" alt="" />
        </div>

        <div className='flex flex-row flex-wrap items-center justify-around h-1/5'>
          <div className='flex flex-col  items-center justify-center m-[15px]'>
            <p className='text-[#17106B] text-xs font-bold'>Total Agents</p>
            <h1 className="text-[#17106B] font-['Poppins'] font-[600] text-[48px] leading-[72px]">105</h1>
          </div>

          <div className='flex flex-col  items-center justify-center m-[15px]'>
            <p className='text-[#17106B] text-xs font-bold'>Active</p>
            <h1 className="text-[#17106B] font-['Poppins'] font-[600] text-[48px] leading-[72px]">105</h1>
          </div>

          <div className='flex flex-col  items-center justify-center m-[15px]'>
            <p className='text-[#17106B] text-xs font-bold'>Engaged</p>
            <h1 className="text-[#17106B] font-['Poppins'] font-[600] text-[48px] leading-[72px]">105</h1>
          </div>
          
          <div className='flex flex-col  items-center justify-center m-[15px]'>
            <p className='text-[#17106B] text-xs font-bold'>Offline</p>
            <h1 className="text-[#17106B] font-['Poppins'] font-[600] text-[48px] leading-[72px]">105</h1>
          </div>
        </div>

      </div>
    </div>
    </Dashboards>
  )
}

export default Agents
