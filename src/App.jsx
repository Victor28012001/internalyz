import './App.css'
import Layout from './Layouts/welcome/Layout'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect';
import phone from "./assets/phone.png"
// import PhoneUI from "./components/dashboard/PhoneUI"

function App() {

  return (
    <Layout>
      {/* <h1>homepage</h1> */}
      <div className="bg-white">


        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-16">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next Onboarding students.{' '}
                <Link to="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Empowering Future Leaders with Virtual Internship Opportunities
              </h3>
              <p className="mt-6 text-sm lg:text-lg md:text-lg leading-8 text-gray-600 sm:text-xs">
                Embark on a transformative journey with Internalyze, where the future of internships is decentralized, virtual, and inclusive. Empower your career or your company's talent pool with our cutting-edge platform, fostering growth, learning, and innovation in the digital age.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to="/signup"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
                <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          {isMobile ? (
            <div className="relative h-[90%] w-full flex justify-center items-center overflow-hidden">
              <div className="bg-white relative overflow-hidden box-border border-[8px] border-solid border-black shadow-[0_0_0_0_#333] w-[330px] h-[600px] rounded-[40px]">
                <div className="absolute bg-[#000] top-0 h-6 w-24 z-[100] left-[50%] translate-x-[-50%] rounded-br-[10px] rounded-bl-[10px] before:content-[''] before:absolute before:h-1 before:w-8 before:top-[7px] before:left-[10px] before:rounded-[10px] before:border-[0.03em] before:border-solid before:border-[rgba(51,51,51, 0.479)] before:shadow-inner-[0_0_0_0_rgba(51,51,51,0.712)] after:content-[''] after:absolute after:h-[7px] after:w-[7px] after:top-[5px] after:right-[20px] after:rounded-[50%] after:bg-[#333]"></div>
                {/* <img src={phone} alt="" className='pt-8 pb-8' /> */}
              </div>
            </div>) : (
            <div className="relative h-[90%] w-full flex justify-center items-center overflow-hidden">
              <div className="bg-white relative overflow-hidden box-border border-[8px] border-solid border-black shadow-[0_0_0_0_#333] w-[100%] h-[450px] rounded-[40px]">
                <div className="absolute bg-[#000] top-0 h-4 w-24 z-[100] left-[50%] translate-x-[-50%] rounded-br-[10px] rounded-bl-[10px] before:content-[''] before:absolute before:h-1 before:w-8 before:top-[7px] before:left-[10px] before:rounded-[10px] before:border-[0.03em] before:border-solid before:border-[rgba(51,51,51, 0.479)] before:shadow-inner-[0_0_0_0_rgba(51,51,51,0.712)] after:content-[''] after:absolute after:h-[7px] after:w-[7px] after:top-[5px] after:right-[20px] after:rounded-[50%] after:bg-[#333]"></div>
                {/* <img src={phone} alt="" className='pt-8 pb-8' /> */}
              </div>
            </div>
          )}
        </div>

      </div>

    </Layout>
  )
}

export default App
