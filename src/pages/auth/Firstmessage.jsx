import React from 'react'

// import Navbar from '../../components/dashboard/Navbar';
import Navbar from '../../Layouts/welcome/Navbar';

const Firstmessage = ({ prevStep, nextStep, handleChange, values }) => {


  const Continue = e => {
    e.preventDefault();
    nextStep();
  }


  const Previous = e => {
    e.preventDefault();
    prevStep();
  }


  return (
    <div className='relative flex flex-col mb-0 content-center scroll-py-60 h-screen w-screen '>
      <Navbar />


      <div className='flex flex-row justify-around content-center scroll-py-10 h-4/5 w-screen top-4'>

        <div className="relative top-1/4 h-2/4 w-1/3 flex flex-col justify-around">

          <h1 className="font-['Poppins'] font-[700] text-[36px] leading-[54px] text-[#344266] ml-1/3 mb-12 self-start">
            Set Up Your Description Message
          </h1>


          <div className="flex flex-col">
            <label className="font-semibold self-start mb-2">Custom Message</label>
            <textarea
              type="text"
              value={values.Message}
              onChange={handleChange(' Message')}
              className="bg-[#DAEBFF] rounded mb-16 h-32"
            />
          </div>


          <button onClick={Previous} className="bg-[#3592FF] rounded py-2 font-semibold text-sm text-white mb-5 mx-0">
            Previous
          </button>

          <button onClick={Continue} className="bg-[#3592FF] rounded py-2 font-semibold text-sm text-white h-[62px] mb-5 mx-0">
            Continue
          </button>

        </div>

        <div className="relative top-4/5 h-4/4 w-1/3 flex flex-col justify-around items-center">

          <span class="w-full h-2/5 rounded-lg flex justify-center items-center font-black shadow-[0_4px_21px_-1px_rgba(0,0,0,0.25)]"></span>
        </div>

      </div>

      <h5 className=" font-bold text-sm text-black self-end mx-auto">
        Step 3/3
      </h5>

    </div>
  )
}

export default Firstmessage
