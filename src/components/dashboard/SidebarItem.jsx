import { useState } from "react"
import { Link } from "react-router-dom";



export default function SidebarItem({ item, key },{defaultActive}) {
    const [open, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(defaultActive || 1);


    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item p-[10px] flex flex-col place-items-center  hover:bg-[#DAEBFF] rounded"}>
                    <Link to={item.path} className="sidebar-title flex flex-row justify-between w-full items-center hover:bg-[rgba(218, 235, 255, 0.79)] hover:rounded" active={key === activeIndex}>
                        <img src={item.icon} alt="" className="w-[24] h-[28]" />
                        <p className="font-semibold text-[#818485] font-['Poppins'] font-[600] text-[20px] leading-[30px]">{item.title}</p>
                        <img src="Polygon 1.svg" alt="" className="w-4 h-4 cursor-pointer duration-[0.3s] toggle-btn" onClick={() => setOpen(!open)} />
                    </Link>

                <div className="sidebar-content h-0 overflow-hidden">
                    <hr className=" -ml-0.5 h-0.5 w-80 bg-black-600" />
                    {
                        item.childrens.map((child) => (
                            <Link to={item.path}>
                                <div className=" cursor-pointer hover:text-[#DAEBFF]">
                                    <p className="font-semibold text-[#818485] font-['Poppins'] font-[500] text-[14px] leading-[21px] mt-[15px] self-center">{child.title}</p>
                                    <hr className=" -ml-0.5 h-0.5 w-80 bg-black-600" />
                                </div>
                            </Link>
                        ))
                    }


                </div>
            </div>
        )
    } else {
        return (
            <Link to={item.path || "#"} className="sidebar-item plain  flex flex-row p-[10px] justify-between w-full  hover:bg-[#DAEBFF] rounded" active={key === activeIndex}>
                <img src={item.icon} alt="" className="w-[24] h-[28]" />
                <p className="font-semibold self-center text-[#818485] font-['Poppins'] font-[600] text-[20px] leading-[30px]">{item.title}</p>
                <p></p>


            </Link>


        )
    }
}