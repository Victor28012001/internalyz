import React from 'react'
import Dashboards from '../../Layouts/dashboard/Dashboards';

const Logout = () => {
  return (
    <Dashboards>
    <div className='flex w-full'>
      <div className='flex flex-col w-[75%] mt-[80px]'>
        
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

export default Logout
