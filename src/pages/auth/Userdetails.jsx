import React from 'react'
import avatar from '../../assets/logo1.png'

import { useState } from 'react';


import Navbar from '../../components/dashboard/Navbar';
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

    const [name, setName] = useState("Your Name");




    return (
        <div className='flex flex-col justify-around items-center scroll-py-60 h-screen w-screen'>
            <Navbar />
            <div className='flex flex-row justify-center items-center scroll-py-60 h-[100%] w-[100%] bg-red pl-44'>
                <div className="relative h-[80%] w-full flex flex-col justify-start">
                    <h1 className="font-['Poppins'] font-[700] text-[36px] leading-[54px] text-[#344266] mb-10 self-start">
                        Set Up Your Live Chat
                    </h1>
                    <div className="flex flex-col mb-5 w-[70%]">
                        <label className="font-semibold mr-2/3 self-start mb-2">Your Name </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            className="bg-[#DAEBFF] rounded  h-12 mb-5 pl-2"
                        />
                    </div>
                    <div className="flex flex-col mb-5 w-[70%]">
                        <label className="font-semibold self-start mb-2">Color Scheme</label>
                        <ul name="color" id="color" className="flex flex-row justify-between">
                            <li value="purple" onClick={() => setColor('orange')}className="transition active:border-yellow-600 active:border-[3px]">
                                <div className=" w-12 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full active:border-yellow-600 active:border-[3px]"></div>
                            </li>
                            <li value="green" onClick={() => setColor('blue')}>
                                <div className="w-12 h-12 bg-gradient-to-t from-sky-500 to-indigo-500 rounded-full active:border-blue-600 active:border-[2px]"></div>
                            </li>
                            <li value="blue" onClick={() => setColor('green')}>
                                <div className="w-12 h-12 bg-gradient-to-t from-violet-500 to-fuchsia-500 rounded-full active:border-blue-600 active:border-[2px]"></div>
                            </li>
                            <li value="gold" onClick={() => setColor('gold')}>
                                <div className="w-12 h-12 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full active:border-blue-600 active:border-[2px]"></div>
                            </li>
                            <li value="orange" onClick={() => setColor('purple')}>
                                <div className="w-12 h-12 bg-gradient-to-t from-pink-500 to-purple-500 rounded-full active:border-blue-600 active:border-[2px]"></div>
                            </li>
                            <li value="pink" onClick={() => setColor('pink')}>
                                <div className="w-12 h-12 bg-gradient-to-t from-blue-200 to-blue-500 rounded-full active:border-blue-600 active:border-[2px]"></div>
                            </li>
                            <li value="dblue" className="flex flex-row w-12 h-12 bg-green rounded-full">
                                <img src="5986_color_colour_drop_line_picker_icon.png" alt="" />
                                <input
                                    type="color"
                                    value={values.colorScheme}
                                    onChange={setColorChange}
                                    className="absolute cursor-pointer w-10 h-10 rounded-full opacity-[0]"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col mb-5 w-[70%]">
                        <label className="font-semibold self-start mb-2">Avatar</label>
                        <div className="flex flex-row mb-5 w-1/1 gap-x-8 items-center">
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

                    <div className="flex flex-col  mb-5 w-[70%]">
                        <label className="font-semibold self-start mb-2">Language</label>
                        <input
                            type="text"
                            value={values.language}
                            onChange={handleChange('language')}
                            className="bg-[#DAEBFF] rounded mb-5 h-12 pl-2"
                        />
                    </div>


                    <button onClick={Continue} className="bg-[#3592FF] rounded py-2 font-semibold text-sm text-white mb-5 w-[70%] h-22">
                        Continue
                    </button>

                    <h5 className=" font-bold text-sm text-black self-end mr-[20%]">
                        Step 1/3
                    </h5>

                </div>

                <PhoneUI file={file} name={name}/>
            </div>
        </div>



    )
}

export default Userdetails
