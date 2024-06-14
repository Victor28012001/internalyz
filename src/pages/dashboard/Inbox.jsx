import React from 'react'
import {TableConversations1} from '../../components/dashboard/Tables'
import PhoneUI from '../../components/dashboard/PhoneUI';
import Dashboards from '../../Layouts/dashboard/Dashboards';
import {ContentHeader} from "../../components/dashboard/ContentHeader"

const Inbox = () => {
  return (
    <Dashboards>
    <div className='flex w-full'>
      <div className='flex flex-col w-[60%] mt-[80px]'>
        <ContentHeader />
        <TableConversations1 />
      </div>
      <div className="flex flex-col w-[40%] px-12 justify-between">
        <PhoneUI />
      </div>
    </div>
    </Dashboards>
  )
}

export default Inbox
