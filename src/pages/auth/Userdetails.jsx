import React from 'react'
import avatar from '../../assets/logo1.png'
import picker_icon from '../../assets/color_picker_icon.png'

import { useState } from 'react';


// import Navbar from '../../components/dashboard/Navbar';
import Navbar from '../../Layouts/welcome/Navbar';
import PhoneUI from '../../components/dashboard/PhoneUI';


const Userdetails = ({ nextStep, handleChange, values }) => {


    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    useState(() => {
        const color = getComputedStyle(document.documentElement).getPropertyValue('--bg-color');
    }, []);

    function setColor(newColor) {
        document.documentElement.style.setProperty('--bg-color', newColor);
    }

    function setColorChange(event) {
        document.documentElement.style.setProperty('--bg-color', event.currentTarget.value);
    }

    const [file, setFile] = useState(avatar);

    const [name, setName] = useState("Full Name");




    return (
        <div className='flex flex-col scroll-py-60 h-screen w-screen overflow-y-hidden'>
            <Navbar />
            <div className='flex flex-row scroll-py-60 h-[80%] w-[100%] bg-red pl-24 mt-[100px] relative'>
                <div className="relative h-[70%] w-[60%] flex flex-col justify-start">
                    <h1 className="font-['Poppins'] font-[700] text-[36px] leading-[54px] text-[#344266] mb-2 self-start">
                        Set Up Your Profile
                    </h1>
                    <div className="flex flex-col mb-3 w-[70%]">
                        <label className="font-semibold mr-2/3 self-start mb-2">Your Name </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            className="bg-[#DAEBFF] rounded  h-12 mb-3 pl-2"
                        />
                    </div>
                    <div className="flex flex-col mb-3 w-[70%]">
                        <label className="font-semibold mr-2/3 self-start mb-2">Your Email </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            className="bg-[#DAEBFF] rounded  h-12 mb-3 pl-2"
                        />
                    </div>
                    <div className="flex flex-col mb-3 w-[70%]">
                        <label className="font-semibold self-start mb-1">Avatar</label>
                        <div className="flex flex-row mb-3 w-1/1 gap-x-8 items-center">
                            <div className="w-12 h-12 bg-[rgba(0,0,0,1)] justify-center items-center border-2 border-black rounded-full overflow-hidden">
                                <img src={file} alt=""  className=''/>
                            </div>
                                <div className="relative">
                                    <input
                                        type="file"
                                        title=" "
                                        value={values.avatar}
                                        onChange={(e) => {
                                            setFile(URL.createObjectURL(e.target.files[0]));
                                        }}
                                        className="block w-full text-sm text-slate-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-violet-50 file:text-[#344266]"
                                        accept="image/x-png,image/gif,image/jpeg"
                                    />
                                </div>

                        </div>
                    </div>

                    <div className="flex flex-col  mb-3 w-[70%]">
                        <label className="font-semibold self-start mb-1">Password</label>
                        <input
                            type="text"
                            value={values.language}
                            onChange={handleChange('language')}
                            className="bg-[#DAEBFF] rounded mb-3 h-12 pl-2"
                        />
                    </div>


                    <div className="flex flex-col  mb-3 w-[70%]">
                        <label className="font-semibold self-start mb-1">Confirm Password</label>
                        <input
                            type="text"
                            value={values.language}
                            onChange={handleChange('language')}
                            className="bg-[#DAEBFF] rounded mb-3 h-12 pl-2"
                        />
                    </div>


                    <button onClick={Continue} className="bg-[#3592FF] rounded py-2 font-semibold text-sm text-white mb-3 w-[70%] h-22">
                        Continue
                    </button>

                    <h5 className=" font-bold text-sm text-black self-end mr-[20%]">
                        Step 1/3
                    </h5>

                </div>

                <div className=''><PhoneUI file={file} name={name}/></div>
            </div>
        </div>



    )
}

export default Userdetails
