import React from 'react'
import logo from "../../assets/logo3.png"
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Team', href: '/teams', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Calendar', href: '/calendar', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (



    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link to="/" className="flex flex-shrink-0 items-center mr-4 justify-center">
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="Your Company"
                    height={42}
                    width={42}
                  />
                  <h3 className="font-[700] text-[#ffffff]">Internalyze</h3>
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                <div className="flex items-center p-1 space-x-2 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
                  <div className="flex bg-gray-100 p-1 w-72 space-x-4 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input className="bg-gray-100 outline-none" type="text" placeholder="Article name or keyword..." />
                  </div>
                  <div className="flex py-1 px-3 rounded-lg text-gray-500 font-semibold cursor-pointer">
                    <span>All categories</span>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="bg-gray-800 py-1 px-3 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                    <span>Search</span>
                  </div>
                </div>



                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 origin-top-right w-[20vw] rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      < div className="flex items-center justify-center bg-gray-100" >
                        <div
                          className="w-full max-w-lg rounded-lg bg-white p-3 drop-shadow-xl divide-y divide-gray-200"
                        >
                          <div aria-label="header" className="flex space-x-4 items-center p-4">
                            <div aria-label="avatar" className="flex mr-auto items-center space-x-4">
                              <img
                                src="https://avatars.githubusercontent.com/u/499550?v=4"
                                alt="avatar Evan You"
                                className="w-16 h-16 shrink-0 rounded-full"
                              />
                              <div className="space-y-2 flex flex-col flex-1 truncate">
                                <div className="font-medium relative text-xl leading-tight text-gray-900">
                                  <span className="flex">
                                    <span className="truncate relative pr-8">
                                      Evan You
                                      <span
                                        aria-label="verified"
                                        className="absolute top-1/2 -translate-y-1/2 right-0 inline-block rounded-full"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                          className="w-6 h-6 ml-1 text-cyan-400"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          stroke-width="2"
                                          stroke="currentColor"
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                          <path
                                            d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                            stroke-width="0"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </span>
                                    </span>
                                  </span>
                                </div>
                                <p className="font-normal text-base leading-tight text-gray-500 truncate">
                                  evanyou@gmail.com
                                </p>
                              </div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              className="w-6 h-6 text-gray-400 shrink-0"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M8 9l4 -4l4 4"></path>
                              <path d="M16 15l-4 4l-4 -4"></path>
                            </svg>
                          </div>
                          <div aria-label="navigation" className="py-2">
                            <nav className="grid gap-1">
                              <MenuItem>
                                {({ focus }) => (
                                  <Link to="/"
                                    className={`${classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} 
          flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="w-7 h-7"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      stroke-width="2"
                                      stroke="currentColor"
                                      fill="none"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    >
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                    </svg>
                                    <span>Account Settings</span>
                                  </Link>)}
                              </MenuItem>
                              <MenuItem>
                                {({ focus }) => (
                                  <Link to="/"
                                    className={`${classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} 
        flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="w-7 h-7"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      stroke-width="2"
                                      stroke="currentColor"
                                      fill="none"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    >
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path
                                        d="M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z"
                                      ></path>
                                      <path d="M4 20l3.5 -3.5"></path>
                                      <path d="M15 4l-3.5 3.5"></path>
                                      <path d="M20 9l-3.5 3.5"></path>
                                    </svg>
                                    <span>Integrations</span>
                                  </Link>)}
                              </MenuItem>
                              <MenuItem>
                                {({ focus }) => (
                                  <Link to="/"
                                    className={`${classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} 
          flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="w-7 h-7"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      stroke-width="2"
                                      stroke="currentColor"
                                      fill="none"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    >
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path
                                        d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
                                      ></path>
                                      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    </svg>
                                    <span>Settings</span>
                                  </Link>)}
                              </MenuItem>
                              <MenuItem>
                                {({ focus }) => (
                                  <Link to="/"
                                    className={`${classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} 
          flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="w-7 h-7"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      stroke-width="2"
                                      stroke="currentColor"
                                      fill="none"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    >
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                      <path
                                        d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
                                      ></path>
                                      <path d="M9 17h6"></path>
                                      <path d="M9 13h6"></path>
                                    </svg>
                                    <span>Guide</span>
                                  </Link>)}
                              </MenuItem>
                              <MenuItem>
                                {({ focus }) => (
                                  <Link to="/"
                                    className={`${classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} 
          flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="w-7 h-7"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      stroke-width="2"
                                      stroke="currentColor"
                                      fill="none"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    >
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path
                                        d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
                                      ></path>
                                      <path d="M12 16v.01"></path>
                                      <path
                                        d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"
                                      ></path>
                                    </svg>
                                    <span>Helper Center</span>
                                  </Link>)}
                              </MenuItem>
                            </nav>
                          </div>
                          <div aria-label="account-upgrade" className="px-4 py-6">
                            <div className="flex items-center space-x-3">
                              <div className="mr-auto space-y-2">
                                <p className="font-medium text-xl text-gray-900 leading-none">
                                  Free Plan
                                </p>
                                <p className="font-normal text-lg text-gray-500 leading-none">
                                  12,000 views
                                </p>
                              </div>
                              <button
                                type="button"
                                className="inline-flex px-6 leading-6 py-3 rounded-md bg-indigo-50 hover:bg-indigo-50/80 transition-colors duration-200 text-indigo-500 font-medium text-lg"
                              >
                                Upgrade
                              </button>
                            </div>
                          </div>
                          <div aria-label="footer" className="pt-2">
                            <button
                              type="button"
                              className="flex items-center space-x-3 py-3 px-4 w-full leading-6 text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="w-7 h-7"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                  d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                                ></path>
                                <path d="M9 12h12l-3 -3"></path>
                                <path d="M18 15l3 -3"></path>
                              </svg>
                              <span>Logout</span>
                            </button>
                          </div>
                        </div>
                      </div >
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}


export default Navbar




