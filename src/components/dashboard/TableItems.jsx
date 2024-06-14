import React from 'react'
import items from '../../data/tables.json'


    const TableConversations = () => {
        let conversations = items[0].conversations
        return (
            conversations.map((item) => (<><tr className=" border-b-[1px]">
                <td><img src={item.country} alt="" /></td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.refId}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.client}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.agent}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.status}</td>
                <td className="flex flex-col text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] items-end">{item.time}<span className='self-end text-xs'>{item.date}</span></td>
            </tr>

                {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
            </>)
            )
        )
        // return console.log(conversations)
    }

    const TableAgents = () => {

        let Agents = items[1].agents

        return (
            Agents.map((item) => (
            <><tr className=" border-b-[1px]">
                <td className=""><img src={item.country} alt="" /></td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.refId}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.agentName}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.status}</td>
                <td className="flex flex-col text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] items-end p-[10px]">{item.time}<span className='self-end text-xs'>{item.date}</span></td>
            </tr>

                {/* <hr className=" -ml-2 h-[8px] w-[80%] bg-black-500 self-center" /> */}
            </>)
            )
        )
    }
    const TableContacts = () => {

        let Contacts = items[2].contacts

        return (
            Contacts.map((item) => (<><tr className=" border-b-[1px]">
                <td><img src={item.country} alt="" /></td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.refId}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.agentName}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.email}</td>
                <td className="flex flex-col text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] items-end">{item.time}<span className='self-end text-xs'>{item.date}</span></td>
            </tr>

                {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
            </>)
            )
        )
    }
    const TableContactList = () => {

        let ContactList = items[3].contactList

        return (
            ContactList.map((item) => (<><tr className=" border-b-[1px]">
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.refId}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.name}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.email}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.phoneNo}</td>
            </tr>

                {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
            </>)
            )
        )
        // return console.log(ContactList)
    }


export {TableConversations, TableAgents, TableContacts, TableContactList}
