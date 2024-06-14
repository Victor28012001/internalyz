import React from 'react'
import {ContentHeader }from '../../components/dashboard/ContentHeader';
import { TablesContacts } from '../../components/dashboard/Tables'
import Dashboards from '../../Layouts/dashboard/Dashboards';

const Contacts = () => {
  return (
    <Dashboards>
    <div className='flex w-full'>
      <div className='flex flex-col w-[75%] mt-[80px]'>
        <ContentHeader />
        <TablesContacts />
        <button className="h-[41px] w-full bg-[#DAEBFF] rounded-[10px] text-[#17106B] font-['Poppins'] font-[700] text-[12px] leading-[18px] mb-[15px]">+ Add New Agent</button>
        <button className="text-[#656375] font-['Poppins'] font-[700] text-[12px] leading-[18px]">See All</button>
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

export default Contacts
