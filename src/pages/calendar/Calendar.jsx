import { React, useState } from 'react'
import Dashboards from '../../Layouts/dashboard/Dashboards'
import Calendar from 'react-calendar';
import './Calendar.css'
import 'react-calendar/dist/Calendar.css';

const Calendars = () => {
    const [date, setDate] = useState(new Date());
    return (
        <Dashboards>
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-16 w-[70%] mt-12">
                <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9" style={{border: "none"}}>
                    <Calendar onChange={setDate} value={date} selectRange={true}
                    />
                {date.length > 0 ? (
                    <p className='text-center'>
                        <span className='bold'>Start:</span>{' '}
                        {date[0].toDateString()}
                        &nbsp;|&nbsp;
                        <span className='bold'>End:</span> {date[1].toDateString()}
                    </p>
                ) : (
                    <p className='text-center'>
                        <span className='bold'>Default selected date:</span>{' '}
                        {date.toDateString()}
                    </p>
                )}

                <button type="button" className="mt-8 w-full rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add event</button>
            </div>
            <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
                <li className="relative flex-col space-x-6 py-6 xl:static">
                    <h2 className="text-base font-semibold leading-6 text-gray-900">Birthday of celebrity</h2>

                    <div className="relative flex space-x-6 py-6 xl:static">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-F5fvhIUKVTVcTY4VyHo-Otw0NHVbLr3NA&usqp=CAU" alt="" className="h-14 w-14 flex-none rounded-full" />
                        <div className="flex-auto">
                            <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">Pat Benatar</h3>
                            <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                                <div className="flex items-start space-x-3">
                                    <dt className="mt-0.5">
                                        <span className="sr-only">Date</span>
                                        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                                        </svg>
                                    </dt>
                                    <dd><time datetime="2022-01-10T17:00">January 10th, 2024</time></dd>
                                </div>
                                <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                                    <dt className="mt-0.5">
                                        <span className="sr-only">Location</span>
                                        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
                                        </svg>
                                    </dt>
                                    <dd>Greenpoint, Brooklyn, New York City</dd>
                                </div>
                            </dl>
                        </div>
                        <div className="absolute right-0 top-6 xl:relative xl:right-auto xl:top-auto xl:self-center">
                            <div>
                                <button type="button" className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600" id="menu-0-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="sr-only">Open options</span>
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                                    </svg>
                                </button>
                            </div>


                            {/* Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
           */}

                        </div>
                    </div>
                </li>
                <li className="relative flex-col space-x-6 py-6 xl:static">
                    <h2 className="text-base font-semibold leading-6 text-gray-900">Birthday of celebrity</h2>

                    <div className="relative flex space-x-6 py-6 xl:static">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-F5fvhIUKVTVcTY4VyHo-Otw0NHVbLr3NA&usqp=CAU" alt="" className="h-14 w-14 flex-none rounded-full" />
                        <div className="flex-auto">
                            <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">Pat Benatar</h3>
                            <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                                <div className="flex items-start space-x-3">
                                    <dt className="mt-0.5">
                                        <span className="sr-only">Date</span>
                                        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                                        </svg>
                                    </dt>
                                    <dd><time datetime="2022-01-10T17:00">January 10th, 2024</time></dd>
                                </div>
                                <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                                    <dt className="mt-0.5">
                                        <span className="sr-only">Location</span>
                                        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
                                        </svg>
                                    </dt>
                                    <dd>Greenpoint, Brooklyn, New York City</dd>
                                </div>
                            </dl>
                        </div>
                        <div className="absolute right-0 top-6 xl:relative xl:right-auto xl:top-auto xl:self-center">
                            <div>
                                <button type="button" className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600" id="menu-0-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="sr-only">Open options</span>
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                                    </svg>
                                </button>
                            </div>


                            {/* Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
           */}

                        </div>
                    </div>
                </li>

                {/* <!-- More meetings... --> */}
            </ol>
        </div>
        </Dashboards >
    )
}

export default Calendars
