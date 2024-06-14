import React from 'react'

import SidebarItem from "./SidebarItem"
import items from "../../data/sidebar.json"


export default function Sidebar() {
  return (
    <div className="flex flex-col w-[20%] h-full justify-items-end items-center mt-[80px] font-black">
      <hr className=" -ml-0.5 h-0.5 w-80 bg-black-600 mb-[15px]" />
      <div className="sidebar flex flex-col space-y-2 h-5/8 w-[65%]">
        {items.map((item, index) => <SidebarItem key={index} item={item} />)}
      </div>
    </div>
  )
}