import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import React, { Fragment, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { BASE_URL } from '../../app/apiconfig/Baseurl'
import { API_PATH } from '../../app/apiconfig/Apipath'
import { BearerToken } from '../../app/utility/session/Cookies'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { UpdateTable } from '../../app/redux/ReduxSlice'
import Loader from '../../app/utility/Loader'
import Button from '../button/Button'

const Free_To_Play_Modal = ({ closeThisModal, tabclicked, editagent }) => {
console.log(tabclicked)
    const dispatch = useDispatch() //Use Dispatch

    //Close Modal
    const closeModal = () => {
        closeThisModal(false)
    }

    const [data, setData] = useState({
        agentName: editagent?.agentName,
        customerName: editagent?.customerName,
        gameName: editagent?.gameName,
        amountOfCoins: editagent?.amountOfCoins,
        accountName: editagent?.accountName,
        remarks: editagent?.remarks
    })

    //OnChange Function
    const handelOnChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    //Api Add Agent
    const [load, setLoad] = useState(false) //Api Loading State
    const handelAddFreeToPlay = async () => {
        if (!data.agentName) {
            toast('Enter Agent Name', { type: 'error' })
        } else if (!data.customerName) {
            toast('Enter Customer Name', { type: 'error' })
        } else if (!data.gameName) {
            toast('Enter Game Name', { type: 'error' })
        } else if (!data.amountOfCoins) {
            toast('Enter Coins Amount', { type: 'error' })
        } else if (!data.accountName) {
            toast('Enter Account Name', { type: 'error' })
        } else if (!data.remarks) {
            toast('Enter Remarks', { type: 'error' })
        } else {
            try {
                setLoad(true)
                const response = await axios.post(BASE_URL + API_PATH.apiAddAget + tabclicked, data, BearerToken)
                if (response.data.status === true) {
                    toast(response.data.message, { type: 'success' })
                    closeModal()
                    dispatch(UpdateTable(true))
                } else {
                    toast(response.data.error, { type: 'error' })
                    closeModal()
                }
                setLoad(false)
            } catch (error) {
                setLoad(false)
            }
        }
    }

    //Edit Agent Data Api is Here
    const EditAgentData = async () => {
        try {
            setLoad(true)
            const response = await axios.put(BASE_URL + API_PATH.apiUpdateAgent+tabclicked+'/'+editagent.agentName, data, BearerToken)
            if (response?.data?.status === true) {
                toast('Agent Updated Successfuly', { type: 'success' })
                closeModal()
                dispatch(UpdateTable(true))
            } else {
                toast("Something went wrong", { type: 'error' })
                closeModal()
            }
            setLoad(false)
        } catch (error) {
            setLoad(false)
        }
    }


    return (
        <>
            <Transition appear show={true} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"

                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full relative max-w-5xl transform overflow-hidden rounded-xl border-[2px] border-[#00A5FF] bg-[#2A2A2B] p-6 text-left align-middle shadow-xl transition-all">
                                    <div className='grid grid-cols-12 gap-4'>
                                        <div className='col-span-3'>
                                            <div className='text-white text-[.9rem] pb-1'>Agent Name</div>
                                            <input type='text' name='agentName' value={data.agentName} onChange={(e) => handelOnChange(e)} className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                        </div>
                                        <div className='col-span-3'>
                                            <div className='text-white text-[.9rem] pb-1'>Customer Name/FB ID</div>
                                            <input type='text' name='customerName' value={data.customerName} onChange={(e) => handelOnChange(e)} className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                        </div>
                                        <div className='col-span-3'>
                                            <div className='text-white text-[.9rem] pb-1'>Game Name</div>
                                            <input type='text' name='gameName' value={data.gameName} onChange={(e) => handelOnChange(e)} className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                        </div>
                                        <div className='col-span-3'>
                                            <div className='text-white text-[.9rem] pb-1'>Amount Of Coins</div>
                                            <input type='text' name='amountOfCoins' value={data.amountOfCoins} onChange={(e) => handelOnChange(e)} className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                        </div>
                                        <div className='col-span-3'>
                                            <div className='text-white text-[.9rem] pb-1'>Account Name</div>
                                            <input type='text' name='accountName' value={data.accountName} onChange={(e) => handelOnChange(e)} className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                        </div>
                                        <div className='col-span-3'>
                                            <div className='text-white text-[.9rem] pb-1'>Remarks</div>
                                            <input type='text' name='remarks' value={data.remarks} onChange={(e) => handelOnChange(e)} className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                        </div>
                                    </div>
                                    {/* Add */}
                                    <div className='pt-5 flex justify-center'>
                                        <Button clickevent={editagent?EditAgentData:handelAddFreeToPlay} style={'gradient-red text-white px-5 py-1 rounded-md hover:scale-90 transition-all'} text={'Add'}/>
                                    </div>
                                    {/* Close Icon */}
                                    <IoMdClose onClick={closeModal} size={25} className='absolute top-1 cursor-pointer hover:scale-105 transition-all z-10 gradient-red rounded-full right-3' />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <Loader show={load} />
        </>
    )
}

export default Free_To_Play_Modal