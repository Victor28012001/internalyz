import React from 'react'
import Dashboards from '../../Layouts/dashboard/Dashboards'

const Teams = () => {
    return (
        <Dashboards>

            <section className="relative py-16 bg-blueGray-50">
                <div className="w-full mb-12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                                    <h3 className="font-semibold text-lg">Teams</h3>
                                </div>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto ">
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Company</th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Budget</th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Status</th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Users</th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Completion </th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <img src="https://demos.creative-tim.com/notus-js/assets/img/bootstrap.jpg" className="h-12 w-12 bg-white rounded-full border" alt="..." />
                                            <span className="ml-3 font-bold"> Argon Design System </span></th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$2,500 USD</td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <i className="fas fa-circle text-orange-500 mr-2"></i>pending</td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex">
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div className="flex items-center">
                                            <span className="mr-2">60%</span>
                                            <div className="relative w-full">
                                                <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                    <div className="w-[60%] shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-red-500"></div>
                                                </div>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                            <a href="#pablo" className="text-blueGray-500 block py-1 px-3" onclick="openDropdown(event,'table-dark-1-dropdown')">
                                                <i className="fas fa-ellipsis-v"></i></a>
                                            <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="table-dark-1-dropdown">
                                                <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</a><a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</a><a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</a>
                                                <div className="h-0 my-2 border border-solid border-blueGray-100"></div>
                                                <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Seprated link</a>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <img src="https://demos.creative-tim.com/notus-js/assets/img/angular.jpg" className="h-12 w-12 bg-white rounded-full border" alt="..." />
                                            <span className="ml-3 font-bold">Angular Now UI Kit PRO </span></th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$1,800 USD</td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <i className="fas fa-circle text-emerald-500 mr-2"></i>completed</td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex">
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2">100%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-500">
                                                        <div className=" w-[30%] shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-emerald-500"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                            <a href="#pablo" className="text-blueGray-500 block py-1 px-3" onclick="openDropdown(event,'table-dark-1-dropdown')">
                                                <i className="fas fa-ellipsis-v"></i></a>
                                            <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="table-dark-1-dropdown">
                                                <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</a><a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</a><a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</a>
                                                <div className="h-0 my-2 border border-solid border-blueGray-100"></div>
                                                <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Seprated link</a>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <img src="https://demos.creative-tim.com/notus-js/assets/img/sketch.jpg" className="h-12 w-12 bg-white rounded-full border" alt="..." />
                                            <span className="ml-3 font-bold">Black Dashboard Sketch
                                            </span></th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$3,150 USD</td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <i className="fas fa-circle text-orange-500 mr-2"></i>delayed</td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex">
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2">73%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                        <div className="w-[73%] shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-red-500"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                            <a href="#pablo" className="text-blueGray-500 block py-1 px-3" onclick="openDropdown(event,'table-dark-1-dropdown')">
                                                <i className="fas fa-ellipsis-v"></i></a>
                                            <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="table-dark-1-dropdown">
                                                <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</a><a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</a><a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</a>
                                                <div className="h-0 my-2 border border-solid border-blueGray-100"></div>
                                                <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Seprated link</a>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <img src="https://demos.creative-tim.com/notus-js/assets/img/react.jpg" className="h-12 w-12 bg-white rounded-full border" alt="..." />
                                            <span className="ml-3 font-bold">React Material Dashboard
                                            </span></th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$4,400 USD</td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <i className="fas fa-circle text-teal-500 mr-2"></i>on schedule</td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex">
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2">90%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                                                        <div className="w-[90%] shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-teal-500"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                            <a href="#pablo" className="text-blueGray-500 block py-1 px-3" onclick="openDropdown(event,'table-dark-1-dropdown')">
                                                <i className="fas fa-ellipsis-v"></i></a>
                                            <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="table-dark-1-dropdown">
                                                <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</a><a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</a><a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</a>
                                                <div className="h-0 my-2 border border-solid border-blueGray-100"></div>
                                                <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Seprated link</a>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <img src="https://demos.creative-tim.com/notus-js/assets/img/vue.jpg" className="h-12 w-12 bg-white rounded-full border" alt="..." />
                                            <span className="ml-3 font-bold">Vue Material Dashboard
                                            </span></th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$2,200USD</td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <i className="fas fa-circle text-emerald-500 mr-2"></i>completed</td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex">
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2">100%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                                        <div className="w-[100%] shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-emerald-500"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                            <a href="#pablo" className="text-blueGray-500 block py-1 px-3" onclick="openDropdown(event,'table-dark-1-dropdown')">
                                                <i className="fas fa-ellipsis-v"></i></a>
                                            <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" id="table-dark-1-dropdown">
                                                <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</a><a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</a><a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</a>
                                                <div className="h-0 my-2 border border-solid border-blueGray-100"></div>
                                                <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Seprated link</a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </Dashboards>
    )
}

export default Teams
