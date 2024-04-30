import React, { useEffect, useState } from 'react'
import { RiLogoutCircleLine } from 'react-icons/ri'
import Button from '../button/Button'
import { useDispatch } from 'react-redux'
import { ModalType } from '../../app/redux/ReduxSlice'

const LeftSideBar = ({ logout, user, tabs, managerTab, Tabs, agenttab, tltab }) => {
    const dispatch = useDispatch()
    const [userAction, setUserAction] = useState([])
    const buttondata = [
        {
            agent: [
                {
                    text: 'Fresh Message',
                    clickevent: Tabs?.AgentTab1,
                    tabtext: 'Fresh_Message',
                },
                {
                    text: 'Free To Play',
                    clickevent: Tabs?.AgentTab2,
                    tabtext: 'Free_To_Play',

                },
                {
                    text: 'First Desposit Entry',
                    clickevent: Tabs?.AgentTab3,
                    tabtext: 'Free_Deposit_Entry',

                },
                {
                    text: 'First Desposit',
                    clickevent: Tabs?.AgentTab4,
                    tabtext: 'Deposit_By_Agent',

                }
            ]
        },
        {
            manager: [
                {
                    text: 'Balance Sheet',
                    clickevent: Tabs?.managerTab1,
                    tabtext: 'Balance_Sheet',

                },
                {
                    text: 'Coin Sheet',
                    clickevent: Tabs?.managerTab2,
                    tabtext: 'Coin_Sheet'

                },
                {
                    text: 'Account Records',
                    clickevent: Tabs?.managerTab3,
                    tabtext: 'Account_Records'

                },
                {
                    text: 'Deposit',
                    clickevent: Tabs?.managerTab4,
                    tabtext: 'Deposit_By_Manager'

                }
            ]
        },
        {
            Tl: [
                {
                    text: 'Customer',
                    clickevent: Tabs?.TlTab,
                    tabtext: 'Customer',

                },
                {
                    text: 'Deposit',
                    clickevent: Tabs?.TlTab1,
                    tabtext: 'deposit'

                }
            ]
        },
        {
            agentsubtab: [
                {
                    modaelType: 'freshmessage',
                    tabtext: 'Fresh_Message'
                },
                {
                    modaelType: 'agent',
                    tabtext: 'Free_To_Play'
                },
                {
                    modaelType: 'agent',
                    tabtext: 'Free_Deposit_Entry'
                },
                {
                    modaelType: 'byagent',
                    tabtext: 'Deposit_By_Agent'
                }
            ]
        },
        {
            managersubtab:
                [
                    {
                        modaelType: 'balancesheet',
                        tabtext: 'Balance_Sheet'
                    },
                    {
                        modaelType: 'coinsheet',
                        tabtext: 'Coin_Sheet'
                    },
                    {
                        modaelType: 'account',
                        tabtext: 'Account_Records'
                    },
                    {
                        modaelType: 'deposit',
                        tabtext: 'Deposit_By_Manager'
                    }
                ]
        }
    ]
    useEffect(() => {
        if (tabs === "Agent") {
            setUserAction(buttondata[0].agent)
        } else if (tabs === "Manager") {
            setUserAction(buttondata[1].manager)
        } else if (tabs === "TL") {
            setUserAction(buttondata[2].Tl)
        } else {
            setUserAction([])
        }
    }, [tabs])
    return (
        <div className='col-span-12 md:col-span-3 pl-6  md:pl-16 pr-5 pt-6 md:pt-10'>
            <div className={`flex flex-col h-full`}>
                <div>
                    <div onClick={logout} className='text-[#D14F4F] cursor-pointer hover:scale-95 transition-all inline-block px-3 space-x-3 text-[100%] rounded-2xl py-2 mb-6 bg-[#2A2A2B]'>
                        <RiLogoutCircleLine size={18} className='inline-block' />
                        <Button style={'inline-block'} text={'Logout'} />
                    </div>
                    <div className='bg-[#2A2A2B] border border-[#8B8B8C] space-x-2 md:space-x-4 flex items-center py-2 px-4 rounded-lg'>
                        <div className='h-[40px] w-[40px] bg-[#848484] rounded-full'></div>
                        <div>
                            <div className='text-[110%] font-semibold text-[#D14F4F]'>Sales CRM</div>
                            <div className='text-[100%] text-[#8C8C8C]'>{user?.designation}</div>
                        </div>
                    </div>
                    <div className='text-white  pt-10 space-y-3'>
                        {
                            userAction?.map((subitem, ind) => (
                                <Button key={ind} text={subitem.text} clickevent={subitem.clickevent} style={`bg-[#454547] ${(tabs === 'Agent' ? agenttab : tabs === "Manager" ? managerTab : tltab) === subitem.tabtext ? 'bg-gray-500' : ''} block w-full text-start px-2 py-2 cursor-pointer hover:scale-90 transition-all border-[#8B8B8C] border-[1px] rounded-md`} />
                            ))
                        }
                    </div>
                </div>
                {user?.designation === "Manager" ? null :
                    <>
                        {tabs === "TL" && tltab === "Customer" ? <div className='mt-auto'>
                            <Button clickevent={() => dispatch(ModalType('tl'))} style={'bg-[#2A2A2B] px-4 py-2 rounded-lg text-[110%] hover:scale-90 transition-all border-[#D84F67] border text-[#D84F67]'} text={'New Entry'} />
                        </div> : ''}
                    </>
                }
                {user?.designation === "Manager" ? null :
                    <>
                        {
                            buttondata?.map((item) => (
                                item?.managersubtab?.map((subitem, ind) => (
                                    tabs === "Manager" && managerTab === subitem?.tabtext ? <div className='mt-auto'>
                                        <Button key={ind} clickevent={() => dispatch(ModalType(subitem?.modaelType))} style={'bg-[#2A2A2B] px-4 py-2 rounded-lg text-[110%] hover:scale-90 transition-all border-[#D84F67] border text-[#D84F67]'} text={'New Entry'} />
                                    </div> : ''
                                ))
                            ))
                        }
                    </>
                }
                {
                    user?.designation === "TL" || user?.designation === "Manager" ? null :
                        <>
                            {
                                buttondata?.map((item) => (
                                    item?.agentsubtab?.map((subitem, ind) => (
                                        tabs === "Agent" && agenttab === subitem?.tabtext ? <div className='mt-auto'>
                                            <Button key={ind} clickevent={() => dispatch(ModalType(subitem?.modaelType))} style={'bg-[#2A2A2B] px-4 py-2 rounded-lg text-[110%] hover:scale-90 transition-all border-[#D84F67] border text-[#D84F67]'} text={'New Entry'} />
                                        </div> : ''
                                    ))
                                ))
                            }
                        </>
                }
            </div>
        </div>
    )
}

export default LeftSideBar
