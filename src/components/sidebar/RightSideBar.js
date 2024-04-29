import React from 'react'
import Balance_Sheet from '../manager/Balance_Sheet'
import Coin_Sheet from '../manager/Coin_Sheet'
import Account_Records from '../manager/Account_Records'
import Fresh_Messages from '../agent/Fresh_Messages'
import Free_To_Play from '../agent/Free_To_Play'
import Tltable from '../tl/Tltable'

const RightSideBar = ({ user, tabs, managerTab, agenttab, Tabs }) => {
    return (
        <div className={`col-span-12 ${user?.designation === "BB" ? 'pt-0' : 'pt-8'}  md:col-span-9`}>
            {user?.designation === "Agent" ? null : <div className='flex  py-2 justify-center'>
                <div className='text-white flex items-center w-[80%] md:w-[40%] justify-between'>
                    <div onClick={Tabs?.Tabs1} className={`bg-[#454547] ${tabs === "TL" ? 'bg-gray-500' : ''} cursor-pointer hover:scale-95 border border-[#8C8C8C] transition-all px-5 py-2 rounded-lg`}>TL</div>
                    {user?.designation === "TL" ? null : <div onClick={Tabs?.Tabs2} className={`bg-[#454547] ${tabs === "Manager" ? 'bg-gray-500' : ''} cursor-pointer hover:scale-95 border border-[#8C8C8C] transition-all px-5 py-2 rounded-lg`}>Manager</div>}
                    <div onClick={Tabs?.Tabs3} className={`bg-[#454547] ${tabs === "Agent" ? 'bg-gray-500' : ''} cursor-pointer hover:scale-95 border border-[#8C8C8C] transition-all px-5 py-2 rounded-lg`}>Agent</div>
                </div>
            </div>}
            {tabs === "TL" ? <Tltable /> : null}
            {tabs === "Manager" && managerTab === "Balance_Sheet" ? <Balance_Sheet /> : null}
            {tabs === "Manager" && managerTab === "Coin_Sheet" ? <Coin_Sheet /> : null}
            {tabs === "Manager" && managerTab === "Account_Records" ? <Account_Records /> : null}
            {tabs === "Agent" && agenttab === "Fresh_Message" ? <Fresh_Messages /> : null}
            {tabs === "Agent" && agenttab === "Free_To_Play" ? <Free_To_Play tabclicked={"freetoplay"} /> : null}
            {tabs === "Agent" && agenttab === "Free_Deposit_Entry" ? <Free_To_Play tabclicked={"firstdeposit"} /> : null}
        </div>
    )
}

export default RightSideBar
