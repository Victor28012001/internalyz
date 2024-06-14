import React from 'react'
import {TableConversations, TableAgents, TableContacts, TableContactList} from "./TableItems";

const TablesConversations = () => {

    return (
        <div className=" overflow-auto w-full">

        <table className="table-auto w-full text-sm">


          <thead>
            <tr className="">
              <th scope="col" className=''></th>
              <th scope="col" className='text-sm' >Ref ID</th>
              <th scope="col" className='text-sm'><div className='flex flex-row ml-[50%] translate-x-[-50%] items-center'><img src="avatar-default-svgrepo-com 2.svg" alt="" height={20} width={20} />Chat</div></th>
              <th scope="col" className='text-sm'><div className='flex flex-row ml-[50%] translate-x-[-50%] items-center'><img src="message-text-svgrepo-com 1.svg" alt="" height={20} width={20} />Agent</div></th>
              <th scope="col" className='text-sm'>Status</th>
              <th scope="col" className='text-sm text-right'>Time</th>
            </tr>
          </thead>

          <tbody>
            <TableConversations />
          </tbody>

        </table>

      </div>
    )
}

const TablesAgents = () => {


    return (
        <div className=" overflow-auto w-full">

        <table className="table-auto w-full text-sm">


          <thead>
            <tr className="">
              <th scope="col" className='flex text-sm self-start'>Country</th>
              <th scope="col" className='text-sm'>ID</th>
              <th scope="col" className='text-sm'>Agent Name</th>
              <th scope="col" className='text-sm'>Status</th>
              <th scope="col" className='text-sm text-right'>Time & Date</th>
            </tr>
          </thead>

          <tbody>
            <TableAgents />
          </tbody>

        </table>

      </div>
    )
}

const TableConversations1 = () => {


    return (
        <div className=" overflow-auto">

        <table className="table-auto w-full text-sm">


          <thead>
            <tr className="">
              <th scope="col" className='flex text-sm self-start'>Country</th>
              <th scope="col" className='text-sm' >ID</th>
              <th scope="col" className='text-sm'>Client's Name</th>
              <th scope="col" className='text-sm'>Agent's Name</th>
              <th scope="col" className='text-sm'>Status</th>
              <th scope="col" className='text-sm text-right'>Time & Date</th>
            </tr>
          </thead>

          <tbody>
            <TableConversations />
          </tbody>

        </table>

      </div>
    )
}


const TablesContacts = () => {


    return (
        <div className=" overflow-auto">

        <table className="table-auto w-full text-sm">


          <thead>
            <tr className="">
              <th scope="col" className='text-sm text-left'>Country</th>
              <th scope="col" className='text-sm' >ID</th>
              <th scope="col" className='text-sm'>Contact Name</th>
              <th scope="col" className='text-sm'>Email Address</th>
              <th scope="col" className='text-sm text-right'>Time & Date</th>
            </tr>
          </thead>

          <tbody>
            <TableContacts />
          </tbody>

        </table>

      </div>
    )
}

const TablesContactList = () => {


    return (
        <div className=" overflow-auto">

        <table className="table-auto w-full text-sm">


          <thead>
            <tr className="text-sm">
              <th scope="col" className=' self-start'></th>
              <th scope="col" className='text-sm' >Name</th>
              <th scope="col" className='text-sm'>Email</th>
              <th scope="col" className='text-sm'>Phone Number</th>
            </tr>
          </thead>

          <tbody>
            <TableContactList />
          </tbody>

        </table>

      </div>
    )

}

export {TablesConversations, TableConversations1, TablesAgents, TablesContacts, TablesContactList}
