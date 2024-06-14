import React from 'react'

import Navbar from '../../components/dashboard/Navbar';

const Industrydetails = ({ prevStep, nextStep, handleChange, values }) => {

  const Continue = e => {
    e.preventDefault();
    nextStep();
  }


  const Previous = e => {
    e.preventDefault();
    prevStep();
  }


  return (
    <div className='flex flex-col content-center items-center pb-20 scroll-py-60 h-screen w-screen'>

      <Navbar />

      <div className="flex flex-col justify-between content-center mt-20 mr-24 h-2/3 w-2/3">

        <h1 className="font-['Poppins'] font-[700] text-[36px] leading-[54px] text-[#344266] self-start mb-12">
          Set Up Your Live Chat
        </h1>


        <div className="flex flex-row justify-around content-center gap-x-10 mx-10">

          <div className="flex flex-col w-1/2">
            <label className="font-bold text-[#344266] self-start mb-2 w-4/9">Number of Agents</label>
            <input
              type="text"
              value={values.language}
              onChange={handleChange('language')}
              className="bg-[#DAEBFF] rounded mb-5 h-14"
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label className="font-bold text-[#344266] self-start mb-2 w-4/9">Size of Firm</label>
            <input
              type="text"
              value={values.language}
              onChange={handleChange('language')}
              className="bg-[#DAEBFF] rounded mb-5 h-14"
            />
          </div>

        </div>

        <div className="flex flex-row justify-around content-center gap-x-10 mx-10">

          <div className="flex flex-col  w-1/2">
            <label className="font-bold text-[#344266] self-start mb-2 w-4/9">Industry</label>
            <input
              type="text"
              value={values.language}
              onChange={handleChange('language')}
              className="bg-[#DAEBFF] rounded mb-5 h-14"
            />
          </div>

          <div className="flex flex-col  w-1/2">
            <label className="font-bold text-[#344266] self-start mb-2 w-4/9">How many inquiries do you get monthly?</label>
            <input
              type="text"
              value={values.language}
              onChange={handleChange('language')}
              className="bg-[#DAEBFF] rounded mb-5 h-14"
            />
          </div>

        </div>


        {/* <button onClick={Previous} className="bg-[#3592FF] rounded py-2 font-semibold text-sm text-white mb-5 mx-10 h-14">
          Previous
        </button> */}


        <button onClick={Continue} className="bg-[#3592FF] rounded py-2 font-semibold text-sm text-white mb-5 mx-10 h-12">
          Continue
        </button>

        <h5 className=" font-black text-sm  text-[#344266] self-end mx-auto">
          Step 2/3
        </h5>

      </div>

    </div>
  )
}

export default Industrydetails
