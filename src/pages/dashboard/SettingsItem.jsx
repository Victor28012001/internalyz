import React from 'react'
import { useState } from "react"
import { FaSortDown } from "react-icons/fa6";



const SettingsItem = ({ item }) => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className={open ? "sidebar-item open" : "sidebar-item p-[10px] flex flex-col place-items-start  hover:bg-[#DAEBFF] rounded"}>
                <div className="sidebar-title flex flex-row justify-between w-[100%] items-center hover:bg-[rgba(218, 235, 255, 0.79)] hover:rounded">
                    <p className="font-semibold text-[#818485] font-['Poppins'] font-[600] text-[20px] leading-[30px]">{item.title}</p>
                    <FaSortDown onClick={() => setOpen(!open)} />
                </div>

                <div className="sidebar-content h-0 overflow-hidden">
                    <hr className=" -ml-0.5 h-0.5 w-80 bg-black-600" />
                    {
                        item.childrens.map((child) => (
                            <div className=" cursor-pointer hover:text-[#DAEBFF]">
                                <p className="font-semibold text-[#818485] font-['Poppins'] font-[500] text-[14px] leading-[21px] mt-[15px] self-center">{child.title}</p>
                                <hr className=" -ml-0.5 h-0.5 w-80 bg-black-600" />
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default SettingsItem
