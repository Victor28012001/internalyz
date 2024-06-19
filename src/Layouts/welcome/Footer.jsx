import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from "../../assets/logo3.png"

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white dark:bg-white-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white-800 dark:text-white">Let’s get started on something great</h2>

          <p className="max-w-md mx-auto mt-2 text-white-500 dark:text-white-400">Join over 4,000+ startups already growing with Internalyze.</p>

          {/* <div className="flex flex-col mt-6 sm:flex-row sm:items-center sm:justify-center">
            <button className="w-full px-5 py-2 text-md font-black tracking-wide border-indigo-600 text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Get started</button>
          </div> */}
        </div>

        <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <div>
            <h3 className="text-md font-black text-white-500 dark:text-white-400">Product</h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Overview</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Features</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Solutions</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Tutorials</Link>
            </div>
          </div>

          <div>
            <h3 className="text-md font-black text-white-500 dark:text-white-400">Company</h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <Link to="/about" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">About us</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Careers</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">News</Link>
              <Link to="/contact" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-md font-black text-white-500 dark:text-white-400">Resources</h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Blog</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Newsletter</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Events</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Supports</Link>
            </div>
          </div>

          <div>
            <h3 className="text-md font-black text-white-500 dark:text-white-400">Use cases</h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Startups</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Enterprises</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Government</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Universities</Link>
            </div>
          </div>

          <div>
            <h3 className="text-md font-black text-white-500 dark:text-white-400">Social</h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Twitter</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Instagram</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">LinkedIn</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Facebook</Link>
            </div>
          </div>

          <div>
            <h3 className="text-md font-black text-white-500 dark:text-white-400">Legal</h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline ">Terms</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Privacy</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Licenses</Link>
              <Link to="#" className="text-white-700 transition-colors duration-200 dark:text-white-200 dark:hover:text-blue-400 hover:underline">Contact</Link>
            </div>
          </div>
        </div>

        <hr className="my-6 border-white-200 md:my-10 dark:border-white-700" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <Link to="#" className='flex items-center justify-center gap-4'>
            <img className="w-auto h-12 sm:8" src={logo1} alt="" />
            <h2 className='text-lg font-bold'>Internalyze</h2>
          </Link>

          <p className="mt-4 text-sm text-white-500 sm:mt-0 dark:text-white-300">© Copyright 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
