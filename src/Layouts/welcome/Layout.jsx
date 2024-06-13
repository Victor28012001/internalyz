import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex w-[100%]">
                <div className="relative w-full flex flex-col bg-blueGray-100">
                    < Navbar />
                    <div className='h-[100%] py-3 flex items-center justify-center'>
                        {children}
                    </div>
                    {/* <Footer/> */}
                </div>
            </div>
        </>
    )
}

export default Layout
