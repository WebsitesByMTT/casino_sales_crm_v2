"use client"
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { deletToken, getUserDetails } from '../utility/session/Cookies'
import Loader from '../utility/Loader'
import { LogOut } from '../apiconfig/Apis'
import LeftSideBar from '../../components/sidebar/LeftSideBar'
import RightSideBar from '../../components/sidebar/RightSideBar'
import { useSelector } from 'react-redux'
import EntryModal from '../../components/modal/EntryModal'

const page = () => {
  const Router = useRouter()
  const [userdetail, setUserDetail] = useState({})
  const [load, setLoad] = useState(false)
  const [tabs, setTabs] = useState()
  const [managerTab, setManagerTab] = useState('Balance_Sheet')
  const [agenttab, setAgenttab] = useState('Fresh_Message')
  const [tltab, setTlTab] = useState('Customer')
  const modaltype = useSelector((state) => state.globlestate.ModalType)
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
  const handelLogOut = async () => {
    const userWhoLogout = {
      userName: userdetail?.userName
    }
    try {
      setLoad(true)
      const response = await LogOut(userWhoLogout)
      if (response.status === true) {
        deletToken()
        toast('Logout Successful', { type: 'success' })
        Router.push('/login')
      }
      setLoad(false)
    } catch (error) {
      setLoad(false)
    }
  }

  const Tabs = {
    managerTab1: () => setManagerTab('Balance_Sheet'),
    managerTab2: () => setManagerTab('Coin_Sheet'),
    managerTab3: () => setManagerTab('Account_Records'),
    managerTab4: () => setManagerTab('Deposit_By_Manager'),
    AgentTab1: () => setAgenttab('Fresh_Message'),
    AgentTab2: () => setAgenttab('Free_To_Play'),
    AgentTab3: () => setAgenttab('Free_Deposit_Entry'),
    AgentTab4: () => setAgenttab('Deposit_By_Agent'),
    Tabs1: () => setTabs("TL"),
    Tabs2: () => setTabs("Manager"),
    Tabs3: () => setTabs("Agent"),
    TlTab: () => setTlTab('Customer'),
    TlTab1: () => setTlTab('deposit')
  }

  return (
    <>
      <div className='gradient-dashboard h-screen w-full'>
        <div className='grid grid-cols-12 h-[95%]'>
          {/* Left  */}
          <LeftSideBar logout={handelLogOut} tltab={tltab} user={userdetail} Tabs={Tabs} tabs={tabs} agenttab={agenttab} managerTab={managerTab} />
          {/* Left */}
          <RightSideBar tltab={tltab} user={userdetail} tabs={tabs} Tabs={Tabs} managerTab={managerTab} agenttab={agenttab} />
          {/* Right */}
        </div>
      </div>
      {modaltype && <EntryModal modaltype={modaltype} tabclicked={agenttab === "Free_To_Play" ? "freetoplay" : "firstdeposit"} />}
      <Loader show={load} />
    </>
  )
}

export default page
