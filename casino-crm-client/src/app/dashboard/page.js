"use client"
import React, { useState } from 'react'
import Tltable from '../components/tl/Tltable'

const page = () => {

  //Tl Manager Agent Tab State
  const [tabs, setTabs] = useState('TL')

  return (
    <div className='gradient-dashboard h-screen w-full'>
      <div className='grid grid-cols-12'>
        {/* Left  */}
        <div className='col-span-3 pl-16 pr-5 pt-16'>
          <div className='flex flex-col justify-end h-full'>
            <div>
              <div className='bg-[#2A2A2B] border border-[#8B8B8C] space-x-4 flex items-center py-2 px-4 rounded-lg'>
                <div className='h-[40px] w-[40px] bg-[#848484] rounded-full'></div>
                <div>
                  <div className='text-[1.1rem] font-semibold text-[#D14F4F]'>Sales CRM</div>
                  <div className='text-[1rem] text-[#8C8C8C]'>BB</div>
                </div>
              </div>
              {/* Manager Tabs */}
              <div></div>
              {/* Manager Tabs */}
            </div>
            {/* TL New Entry Button */}
             {tabs==="TL"?<div className='mt-auto'> 
                <button className='bg-[#2A2A2B] px-4 py-2 rounded-lg text-[1.1rem] hover:scale-90 transition-all border-[#D84F67] border text-[#D84F67]'>New Entry</button>
             </div>:''}
            {/* TL New Entry Button */}
          </div>
        </div>
        {/* Right */}
        <div className='col-span-9'>
          {/* Tl Manager Agent Tabs */}
          <div className='flex py-8 justify-center'>
            <div className='text-white flex items-center w-[40%] justify-between'>
              <div onClick={() => setTabs("TL")} className={`bg-[#454547] ${tabs === "TL" ? 'bg-[#2A2A2B]' : ''} cursor-pointer hover:scale-95 border border-[#8C8C8C] transition-all px-5 py-2 rounded-lg`}>TL</div>
              <div onClick={() => setTabs("Manager")} className={`bg-[#454547] ${tabs === "Manager" ? 'bg-[#2A2A2B]' : ''} cursor-pointer hover:scale-95 border border-[#8C8C8C] transition-all px-5 py-2 rounded-lg`}>Manager</div>
              <div onClick={() => setTabs("Agent")} className={`bg-[#454547] ${tabs === "Agent" ? 'bg-[#2A2A2B]' : ''} cursor-pointer hover:scale-95 border border-[#8C8C8C] transition-all px-5 py-2 rounded-lg`}>Agent</div>
            </div>
          </div>
          {/* TL Table */}
          {tabs === "TL" ? <Tltable /> : null}
          {/* TL Table */}
        </div>
      </div>
    </div>
  )
}

export default page
