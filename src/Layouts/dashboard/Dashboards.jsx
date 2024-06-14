import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';

import Navbar from "../../components/dashboard/Navbar"
import Sidebar from '../../components/dashboard/Sidebar';
// import Routee from '../Routes';





const Dashboards = ({children}) => {

  return (
    // <Router >
    <>
    <Navbar />
      <div className="flex flex-row h-screen w-screen overflow-hidden">
        <Sidebar />
        {children}
      </div>
    {/* <Footer /> */}
    </>

    // </Router>
  )
}

export default Dashboards
