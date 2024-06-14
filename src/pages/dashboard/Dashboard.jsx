import React from 'react'
import Graph from '../../components/dashboard/Graph'
import GraphHeader from '../../components/dashboard/GraphHeader'
import {ContentHeader} from '../../components/dashboard/ContentHeader';
import { TablesConversations, TablesContactList } from "../../components/dashboard/Tables";
import Dashboards from '../../Layouts/dashboard/Dashboards';

const Dashboard = () => {
  return (
    <Dashboards>
      <div className='flex flex-col w-2/5 mt-[80px] h-[70%]'>
          <div className="flex flex-col w-full h-[200px] rounded-lg flex bg-[#F8F9FC] shadow-[0_4px_21px_-1px_rgba(0,0,0,0.25)] p-[12px] mb-12">
          {/* <CardContainer> */}
            <ContentHeader />
            <TablesConversations />
          {/* </CardContainer> */}
          </div>
          <div className="flex flex-col w-full h-3/5 rounded-lg flex items-center justify-center bg-[#F8F9FC] font-black shadow-[0_4px_21px_-1px_rgba(0,0,0,0.25)] py-8">
            <GraphHeader />
            <Graph />
          </div>
        </div>
        <div className="flex flex-col w-2/5  h-[80%] px-12 justify-between">

          <div className="flex flex-row h-1/8 bg-grey justify-end">

            <h5>Agent:<span className='text-[#3592FF] font-semibold'>Admin</span></h5>
            <img src="Vector(2).svg" alt="" />

          </div>
          <div className="flex flex-col h-[200px] w-full justify-between  text-sm">
            <h2 className='text-[#17106B] text-md font-semibold  self-start'>Contact List</h2>

                  <TablesContactList />

          </div>

          <div className="flex flex-row w-full h-1/5 rounded-lg items-center justify-around bg-[#F8F9FC] shadow-[0_4px_21px_-1px_rgba(0,0,0,0.25)] py-8">

            <div className="flex flex-col h-1/2 items-center py-8 justify-center">
              <div className="w-12 h-12 block"><img src="Vector(7).svg" alt="" className="table-cell" /></div>
              <p className=' text-xs font-md'>Total Agents</p>
              <h4 className=' font-black'>105</h4>
            </div>

            <div className="flex flex-col h-1/2 items-center justify-center py-8">
              <div className="w-12 h-12 flex justify-items-center"><img src="Vector(8).svg" alt="" className="table-cell" /></div>
              <p className=' text-xs font-md'>Total Agents</p>
              <h4 className=' font-black'>105</h4>
            </div>

            <div className="flex flex-col h-1/2 items-center justify-center py-8">
              <div className="w-12 h-12 flex justify-items-center"><img src="Vector(9).svg" alt="" className="table-cell" /></div>
              <p className=' text-xs font-md'>Total Agents</p>
              <h4 className=' font-black'>105</h4>
            </div>

            <div className="w-12 h-12">
              <img src="add-plus-circle.svg" alt="" />
            </div>

            <div className="w-10 h-10">
              <img src="hamburger-menu-dots-svgrepo-com copy.svg" alt="" />
            </div>

            <div className="w-12 h-12">
              <img src="user-avatar.png" alt="" />
            </div>

          </div>

          <div className='flex flex-row  items-center justify-around  w-full h-1/5'>

            <div className='flex flex-col  items-center justify-center'>
              <p className='text-[#17106B] text-xs font-bold'>Visitors</p>
              <h1 className="text-[#17106B] font-['Poppins'] font-[600] text-[48px] leading-[72px]">105</h1>
            </div>

            <div className='flex flex-col  items-center justify-center'>
              <p className='text-[#17106B] text-xs font-bold'>Chat Engagement</p>
              <h1 className="text-[#17106B] font-['Poppins'] font-[600] text-[48px] leading-[72px]">105</h1>
            </div>

            <div className='flex flex-col  items-center justify-center'>
              <p className='text-[#17106B] text-xs font-bold'>Page Views</p>
              <h1 className="text-[#17106B] font-['Poppins'] font-[600] text-[48px] leading-[72px]">105</h1>
            </div>

          </div>


        </div>
    </Dashboards>
  )
}

export default Dashboard
