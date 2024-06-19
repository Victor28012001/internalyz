import React from 'react'
import { BrowserRouter as router, Routes, Route, Link } from 'react-router-dom';

// import Navbar from "../../components/dashboard/Navbar";
import Navbar from '../../Layouts/welcome/Navbar';

const Livechat = ({ prevStep, nextStep, handleChange, values }) => {

  const Continue = e => {
    e.preventDefault();
    nextStep();
  }


  const Previous = e => {
    e.preventDefault();
    prevStep();
  }



  return (
    <div className='flex flex-col pb-20 scroll-py-60 h-screen w-screen'>

      <Navbar />

      <div className='flex flex-col justify-around items-center scroll-py-1/4 h-screen w-[100%] mt-36'>

        <div className="flex flex-row w-1/2 ml-12 self-start ml-24">

          <h1 className="font-['Poppins'] font-[700] text-[36px] leading-[54px] text-[#344266] mb-12 ml-24">
            Setup And Profile Link
          </h1>

        </div>


        <div className='flex flex-row justify-around content-center scroll-py-10 h-4/5 w-[85%] top-4'>

          <div className="flex flex-col content-center w-1/5 ">
            <ul className="flex flex-col justify-around content-center h-1/2">
              <li className="font-['Poppins'] font-[700] text-[20px] leading-[30px] text-[#818485] hover:text-[#344266] hover:bg-[#DAEBFF] hover:items-center hover:justify-center rounded h-12">Javascript</li>
              <li className="font-['Poppins'] font-[700] text-[20px] leading-[30px] text-[#818485] hover:text-[#344266] hover:bg-[#DAEBFF] hover:items-center hover:justify-center rounded h-12">WordPress</li>
              <li className="font-['Poppins'] font-[700] text-[20px] leading-[30px] text-[#818485] hover:text-[#344266] hover:bg-[#DAEBFF] hover:items-center hover:justify-center rounded h-12">Shopify</li>
              <li className="font-['Poppins'] font-[700] text-[20px] leading-[30px] text-[#818485] hover:text-[#344266] hover:bg-[#DAEBFF] hover:items-center hover:justify-center rounded h-12">Ecommerce</li>
              <li className="font-['Poppins'] font-[700] text-[20px] leading-[30px] text-[#818485] hover:text-[#344266] hover:bg-[#DAEBFF] hover:items-center hover:justify-center rounded h-12">Others</li>
            </ul>
          </div>

          <div className=" -ml-0.5 w-0.5 h-80 bg-gray-600"></div>

          <div className="flex flex-col justify-between content-center w-3/5 h-[80%] gap-12">

            <div className="flex flex-col">
              <label className="font-semibold self-start mb-2">Copy this code to add widget to Website</label>
              <input
                type="text"
                value={values.avatar}
                onChange={handleChange('avatar')}
                className="bg-[#DAEBFF] rounded self-start w-full h-[55px]"
              />
            </div>
            <div className="flex flex-row justify-between content-center w-full">
              <div className="bg-[#DAEBFF] rounded w-[40%]">
                <span className=' flex flex-row h-[50px] content-center  items-center justify-around py-1'>
                  <img src="Vector.svg" alt="" className="h-6" />
                  <h5 className=' font-semibold text-sm'>Copy To Clipboard</h5>
                </span>
              </div>
              <div className="bg-[#DAEBFF] rounded w-[40%]">
                <span className=' flex flex-row h-[50px] content-center  items-center justify-around py-1'>
                  <img src="Vector(1).svg" alt="" className="h-5" />
                  <h5 className=' font-semibold text-sm'>Send to Email</h5>
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between">


              <button onClick={Previous} className="h-[50px] bg-[#3592FF] rounded py-2 font-semibold text-sm text-white mb-5 mx-0">
                Previous
              </button>



              <button onClick={Continue} className="h-[50px] bg-[#3592FF] rounded py-2 font-semibold text-sm text-white mb-5 mx-0">
                Submit
              </button>


            </div>


          </div>

        </div>

      </div>

    </div>
  )
}

export default Livechat
