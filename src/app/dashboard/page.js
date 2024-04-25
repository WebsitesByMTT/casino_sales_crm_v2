"use client"
import React, { useEffect, useState } from 'react'
import Tltable from '../../components/tl/Tltable'
import TlEntryModal from '../../components/tl/TlEntryModal'
import Balance_Sheet from '../../components/manager/Balance_Sheet'
import Balance_Sheet_Modal from '../../components/manager/Balance_Sheet_Modal'
import Coin_Sheet from '../../components/manager/Coin_Sheet'
import Coin_Sheet_Modal from '../../components/manager/Coin_Sheet_Modal'
import Account_Records from '../../components/manager/Account_Records'
import Account_Records_Modal from '../../components/manager/Account_Records_Modal'
import Fresh_Messages from '../../components/agent/Fresh_Messages'
import { RiLogoutCircleLine } from "react-icons/ri";
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Fresh_Messages_Modal from '../../components/agent/Fresh_Messages_Modal'
import Free_To_Play from '../../components/agent/Free_To_Play'
import Free_To_Play_Modal from '../../components/agent/Free_To_Play_Modal'
import { deletToken, getUserDetails } from '../utility/session/Cookies'
import Button from '../../components/button/Button'

const page = () => {
  //Get UserDetails 
  const [userdetail, setUserDetail] = useState({})
  async function getUser() {
    const userDetails = await getUserDetails();
    if (userDetails) {
      setUserDetail(userDetails)
      setTabs(userDetails?.designation !== "BB" ? userDetails?.designation : "Manager")
    }
  }
  useEffect(() => {
    getUser()
  }, [])
  //Get UserDetails 


  //Use Router
  const Router = useRouter()

  //Logout dispatch
  const handelLogOut = () => {
    deletToken()
    toast('Logout Successful', { type: 'success' })
    Router.push('/')
  }

  //Tl Manager Agent Tab State
  const [tabs, setTabs] = useState()
  //Tl Manager Agent Tab State

  //Open TL New Entry Popup
  const [tlpopup, setTlpopup] = useState(false)
  const closepopuptl = (state) => {
    setTlpopup(state)
  }
  //Open TL New Entry Popup

  //Manager Balance-Sheet,Coin-Sheet,Account-Records Tab State
  const [managerTab, setManagerTab] = useState('Balance_Sheet')
  //Manager Balance-Sheet,Coin-Sheet,Account-Records Tab State

  //Balance Sheet Modal State
  const [balancesheet, setBalancesheet] = useState(false)
  const closeBalanceSheetModal = (state) => {
    setBalancesheet(state)
  }
  //Balance Sheet Modal State

  //CoinSheet Modal State
  const [coinsheet, setCoinSheet] = useState(false)
  const closeCoinModal = (state) => {
    setCoinSheet(state)
  }
  //CoinSheet Modal State

  //Account Records Modal State
  const [accountrecord, setAccountRecord] = useState(false)
  const closeAccountRecordModal = (state) => {
    setAccountRecord(state)
  }
  //Account Records Modal State

  //Handel Agent Tab
  const [agenttab, setAgenttab] = useState('Fresh_Message')
  const [freshmessage, setFreshMessage] = useState(false)
  const closeFreshMessage = (state) => {
    setFreshMessage(state)
  }
  const [freemodal, setFreeModal] = useState(false)
  const closeFreeModal = (state) => {
    setFreeModal(state)
  }
  //Handel Agent Tab

  return (
    <>
      <div className='gradient-dashboard h-screen w-full'>
        <div className='grid grid-cols-12 h-[95%]'>
          {/* Left  */}
          <div className='col-span-12 md:col-span-3 pl-6  md:pl-16 pr-5 pt-6 md:pt-10'>
            <div className={`flex flex-col h-full`}>
              <div>
                {/* Logout Button */}
                <div onClick={handelLogOut} className='text-[#D14F4F] cursor-pointer hover:scale-95 transition-all inline-block px-3 space-x-3 text-[100%] rounded-2xl py-2 mb-6 bg-[#2A2A2B]'>
                  <RiLogoutCircleLine size={18} className='inline-block' />
                  <Button style={'inline-block'} text={'Logout'}/>
                </div>
                <div className='bg-[#2A2A2B] border border-[#8B8B8C] space-x-2 md:space-x-4 flex items-center py-2 px-4 rounded-lg'>
                  <div className='h-[40px] w-[40px] bg-[#848484] rounded-full'></div>
                  <div>
                    <div className='text-[110%] font-semibold text-[#D14F4F]'>Sales CRM</div>
                    <div className='text-[100%] text-[#8C8C8C]'>{userdetail?.designation}</div>
                  </div>
                </div>
                {/* Manager Tabs */}
                {tabs === "Manager" && <div className='text-white  pt-10 space-y-3'>
                  <Button text={'Balance Sheet'} clickevent={() => setManagerTab('Balance_Sheet')} style={`bg-[#454547] ${managerTab === "Balance_Sheet" ? 'bg-gray-500' : ''} block w-full text-start px-2 py-2 cursor-pointer hover:scale-90 transition-all border-[#8B8B8C] border-[1px] rounded-md`} />
                  <Button text={'Coin Sheet'} clickevent={() => setManagerTab('Coin_Sheet')} style={`bg-[#454547] ${managerTab === "Coin_Sheet" ? 'bg-gray-500' : ''} block w-full text-start px-2 py-2 cursor-pointer hover:scale-90 transition-all border-[#8B8B8C] border-[1px] rounded-md`} />
                  <Button text={'Account Records'} clickevent={() => setManagerTab('Account_Records')} style={`bg-[#454547] ${managerTab === "Account_Records" ? 'bg-gray-500' : ''} block w-full text-start px-2 py-2 cursor-pointer hover:scale-90 transition-all border-[#8B8B8C] border-[1px] rounded-md`} />
                </div>}
                {/* Manager Tabs */}
                {/* Agent Tabs */}
                {tabs === "Agent" && <div className='text-white  pt-10 space-y-3'>
                  <Button text={'Fresh Messages'} clickevent={() => setAgenttab('Fresh_Message')} style={`bg-[#454547] ${agenttab === "Fresh_Message" ? 'bg-gray-500' : ''} block w-full text-start px-2 py-2 cursor-pointer hover:scale-90 transition-all border-[#8B8B8C] border-[1px] rounded-md`} />
                  <Button text={'Free To Play'} clickevent={() => setAgenttab('Free_To_Play')} style={`bg-[#454547] ${agenttab === "Free_To_Play" ? 'bg-gray-500' : ''} block w-full text-start px-2 py-2 cursor-pointer hover:scale-90 transition-all border-[#8B8B8C] border-[1px] rounded-md`} />
                  <Button text={'First Desposit Entry'} clickevent={() => setAgenttab('Free_Deposit_Entry')} style={`bg-[#454547] ${agenttab === "Free_Deposit_Entry" ? 'bg-gray-500' : ''} block w-full text-start px-2 py-2 cursor-pointer hover:scale-90 transition-all border-[#8B8B8C] border-[1px] rounded-md`} />
                </div>}
                {/* Agent Tabs */}
              </div>
              {/* TL New Entry Button */}
              {userdetail?.designation === "Manager" ? null : <>
                {tabs === "TL" ? <div className='mt-auto'>
                  <Button clickevent={() => setTlpopup(true)} style={'bg-[#2A2A2B] px-4 py-2 rounded-lg text-[110%] hover:scale-90 transition-all border-[#D84F67] border text-[#D84F67]'} text={'New Entry'} />
                </div> : ''}
              </>}
              {/* TL New Entry Button */}
              {/* Manager New Entry Button */}
              {tabs === "Manager" && managerTab === "Balance_Sheet" ? <div className='mt-auto'>
                <Button clickevent={() => setBalancesheet(true)} style={'bg-[#2A2A2B] px-4 py-2 rounded-lg text-[110%] hover:scale-90 transition-all border-[#D84F67] border text-[#D84F67]'} text={'New Entry'} />
              </div> : ''}

              {tabs === "Manager" && managerTab === "Coin_Sheet" ? <div className='mt-auto'>
                <Button clickevent={() => setCoinSheet(true)} style={'bg-[#2A2A2B] px-4 py-2 rounded-lg text-[110%] hover:scale-90 transition-all border-[#D84F67] border text-[#D84F67]'} text={'New Entry'} />
              </div> : ''}

              {tabs === "Manager" && managerTab === "Account_Records" ? <div className='mt-auto'>
                <Button clickevent={() => setAccountRecord(true)} style={'bg-[#2A2A2B] px-4 py-2 rounded-lg text-[110%] hover:scale-90 transition-all border-[#D84F67] border text-[#D84F67]'} text={'New Entry'} />
              </div> : ''}
              {/* Manager New Entry Button */}
              {/* Agent New Entry Button */}
              {userdetail?.designation === "TL" || userdetail?.designation === "Manager" ? null : <>
                {tabs === "Agent" && agenttab === "Fresh_Message" ? <div className='mt-auto'>
                   <Button clickevent={() => setFreshMessage(true)} style={'bg-[#2A2A2B] px-4 py-2 rounded-lg text-[110%] hover:scale-90 transition-all border-[#D84F67] border text-[#D84F67]'} text={'New Entry'} />
                </div> : ''}
                {tabs === "Agent" && agenttab === "Free_To_Play" ? <div className='mt-auto'>
                   <Button clickevent={() => setFreeModal(true)} style={'bg-[#2A2A2B] px-4 py-2 rounded-lg text-[110%] hover:scale-90 transition-all border-[#D84F67] border text-[#D84F67]'} text={'New Entry'} />
                </div> : ''}
                {tabs === "Agent" && agenttab === "Free_Deposit_Entry" ? <div className='mt-auto'>
                  <Button clickevent={() => setFreeModal(true)} style={'bg-[#2A2A2B] px-4 py-2 rounded-lg text-[110%] hover:scale-90 transition-all border-[#D84F67] border text-[#D84F67]'} text={'New Entry'} />
                </div> : ''}
              </>}
              {/* Agent New Entry Button */}
            </div>
          </div>
          {/* Left */}
          {/* Right */}
          <div className={`col-span-12 ${userdetail?.designation === "BB" ? 'pt-0' : 'pt-8'}  md:col-span-9`}>
            {/* Tl Manager Agent Tabs */}
            {userdetail?.designation === "Agent" ? null : <div className='flex  py-2 justify-center'>
              <div className='text-white flex items-center w-[80%] md:w-[40%] justify-between'>
                <div onClick={() => setTabs("TL")} className={`bg-[#454547] ${tabs === "TL" ? 'bg-gray-500' : ''} cursor-pointer hover:scale-95 border border-[#8C8C8C] transition-all px-5 py-2 rounded-lg`}>TL</div>
                {userdetail?.designation === "TL" ? null : <div onClick={() => setTabs("Manager")} className={`bg-[#454547] ${tabs === "Manager" ? 'bg-gray-500' : ''} cursor-pointer hover:scale-95 border border-[#8C8C8C] transition-all px-5 py-2 rounded-lg`}>Manager</div>}
                <div onClick={() => setTabs("Agent")} className={`bg-[#454547] ${tabs === "Agent" ? 'bg-gray-500' : ''} cursor-pointer hover:scale-95 border border-[#8C8C8C] transition-all px-5 py-2 rounded-lg`}>Agent</div>
              </div>
            </div>}
            {/* TL Table */}
            {tabs === "TL" ? <Tltable /> : null}
            {/* TL Table */}
            {/* Manager Balance_Sheet Coin_Sheet Account_Records Table */}
            {tabs === "Manager" && managerTab === "Balance_Sheet" ? <Balance_Sheet /> : null}
            {tabs === "Manager" && managerTab === "Coin_Sheet" ? <Coin_Sheet /> : null}
            {tabs === "Manager" && managerTab === "Account_Records" ? <Account_Records /> : null}
            {/* Manager Balance_Sheet Coin_Sheet Account_Records Table */}
            {/* Agent Fresh_Messages Free_To_Play First_Deposit_Entry Table */}
            {tabs === "Agent" && agenttab === "Fresh_Message" ? <Fresh_Messages /> : null}
            {tabs === "Agent" && agenttab === "Free_To_Play" ? <Free_To_Play tabclicked={"freetoplay"} /> : null}
            {tabs === "Agent" && agenttab === "Free_Deposit_Entry" ? <Free_To_Play tabclicked={"firstdeposit"} /> : null}
            {/* Agent Fresh_Messages Free_To_Play First_Deposit_Entry Table */}

          </div>
          {/* Right */}
        </div>
      </div>
      {/* TL Entry Popup */}
      {tlpopup && <TlEntryModal closetlpopup={closepopuptl} />}
      {/* TL Entry Popup */}
      {/* Manager Entry Popup */}
      {balancesheet && <Balance_Sheet_Modal closeBalanceSheet={closeBalanceSheetModal} />}
      {coinsheet && <Coin_Sheet_Modal closecoinsheet={closeCoinModal} />}
      {accountrecord && <Account_Records_Modal closeaccountrecord={closeAccountRecordModal} />}
      {/* Manager Entry Popup */}
      {/* Agent Entry Popup */}
      {freshmessage && <Fresh_Messages_Modal close_Fresh_Message={closeFreshMessage} />}
      {freemodal && <Free_To_Play_Modal tabclicked={agenttab === "Free_To_Play" ? "freetoplay" : "firstdeposit"} closeThisModal={closeFreeModal} />}
      {/* Agent Entry Popup */}
    </>
  )
}

export default page
