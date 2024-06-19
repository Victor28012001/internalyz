import React from 'react'
import Dashboards from '../../Layouts/dashboard/Dashboards';

const Schedule = () => {

  return (
    <Dashboards>
      
      <div class="flex justify-center p-2 bg-gray-100 w-[80%] h-[100%]">
        <div class="bg-white rounded-lg w-2/3 lg:w-1/2 xl:w-2/3 p-4 shadow h-[90%]">
          <div>
            <span class="text-gray-900 relative inline-block date uppercase font-medium tracking-widest">Wednesday 8</span>
            <div class="flex mb-2">
              <div class="w-2/12">
                <span class="text-sm text-gray-600 block">8:00a</span>
                <span class="text-sm text-gray-600 block">8:15a</span>
              </div>
              <div class="w-1/12">
                <span class="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
              </div>
              <div class="w-9/12">
                <span class="text-sm font-semibold block">Morning Standup</span>
                <span class="text-sm">Zoom ID: 1134 11 1134</span>
              </div>
            </div>
            <div class="flex mb-4">
              <div class="w-2/12">
                <span class="text-sm text-gray-600 block">10:00a</span>
                <span class="text-sm text-gray-600 block">2:00p</span>
              </div>
              <div class="w-1/12">
                <span class="bg-red-400 h-2 w-2 rounded-full block mt-2"></span>
              </div>
              <div class="w-9/12">
                <span class="text-sm font-semibold block">Core Development</span>
                <span class="text-sm">Joey, Matt, CJ and Vlad</span>
              </div>
            </div>
            <div class="flex mb-4">
              <div class="w-2/12">
                <span class="text-sm text-gray-600 block">3:00p</span>
                <span class="text-sm text-gray-600 block">3:30p</span>
              </div>
              <div class="w-1/12">
                <span class="bg-indigo-600 h-2 w-2 rounded-full block mt-2"></span>
              </div>
              <div class="w-9/12">
                <span class="text-sm font-semibold block">Interview with Ed Harris</span>
              </div>
            </div>
          </div>
          <div>
            <span class="text-gray-900 relative inline-block date uppercase font-medium tracking-widest">Thursday 9</span>
            <div class="flex mb-2">
              <div class="w-2/12">
                <span class="text-sm text-gray-600 block">8:00a</span>
                <span class="text-sm text-gray-600 block">8:15a</span>
              </div>
              <div class="w-1/12">
                <span class="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
              </div>
              <div class="w-9/12">
                <span class="text-sm font-semibold block">Morning Standup</span>
                <span class="text-sm">Zoom ID: 1134 11 1134</span>
              </div>
            </div>
            <div class="flex mb-4">
              <div class="w-2/12">
                <span class="text-sm text-gray-600 block">6:00p</span>
                <span class="text-sm text-gray-600 block">7:30p</span>
              </div>
              <div class="w-1/12">
                <span class="bg-yellow-400 h-2 w-2 rounded-full block mt-2"></span>
              </div>
              <div class="w-9/12">
                <span class="text-sm font-semibold block">Dinner with Mom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboards>
  )
}

export default Schedule
