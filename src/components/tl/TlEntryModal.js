import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios';
import React, { Fragment, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { toast } from 'react-toastify';
import { BASE_URL } from '../../app/apiconfig/Baseurl';
import { API_PATH } from '../../app/apiconfig/Apipath';
import Loader from '../../app/utility/Loader';
import { useDispatch } from 'react-redux';
import { UpdateTable } from '../../app/redux/ReduxSlice';
import { BearerToken } from '../../app/utility/session/Cookies';

const TlEntryModal = ({ closetlpopup,tlEditdata}) => {
    const dispatch = useDispatch() //Dispatch From Redux

    //Close Modal function 
    const closeModal = () => {
        closetlpopup(false)
    }

    //Get Input Typed Data
    const [tldata, setTlData] = useState({
        customer_name:tlEditdata?.customerName,
        game_name:tlEditdata?.gameName,
        amount:tlEditdata?.amount,
        account_name:tlEditdata?.accountName,
        remark:tlEditdata?.remarks
    })

    const handelOnchange = (e) => {
        const { name, value } = e.target
        setTlData({ ...tldata, [name]: value })
    }

    //Add Tl Data Api is Here
    const [load, setLoad] = useState(false) //Api Loading State
    const data = {
        customerName:tldata.customer_name,
        gameName: tldata.game_name,
        amount:tldata.amount,
        accountName: tldata.account_name,
        remarks: tldata.remark
    }
    const handleadddata = async () => {
        if (!tldata.customer_name) {
            toast('Enter Customer Name', { type: 'error' })
        } else if (!tldata.game_name) {
            toast('Enter Game Name', { type: 'error' })
        } else if (!tldata.amount) {
            toast('Enter Amount', { type: 'error' })
        } else if (!tldata.account_name) {
            toast('Enter Account Name', { type: 'error' })
        } else if (!tldata.remark) {
            toast('Enter Remark', { type: 'error' })
        } else {
            try {
                setLoad(true)
                const response = await axios.post(BASE_URL + API_PATH.apiAddTl, data,BearerToken)
                if (response?.data?.status === true) {
                    toast(response.data.message, { type: 'success' })
                    closeModal()
                    dispatch(UpdateTable(true))
                } else {
                    toast('Something went wrong', { type: 'error' })
                    closeModal()
                }
                setLoad(false)
            } catch (error) {
                setLoad(false)
            }
        }
    }
    //Edit Tl Data Api is Here
    const EditTlData=async()=>{
        try {
            const response=await axios.put(BASE_URL+API_PATH.apiUpdateTl+tlEditdata.customerName,data,BearerToken)
            if(response?.data?.status===true){
              toast(response.data.message,{type:'success'})
               closeModal()
               dispatch(UpdateTable(true))
            }else{
                toast("Something went wrong",{type:'error'})
                closeModal()
            }
        } catch (error) {
            
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
                                            <div className='text-white text-[.9rem] pb-1'>Customer name</div>
                                            <input type='text' value={tldata.customer_name} onChange={(e) => handelOnchange(e)} name='customer_name' className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                        </div>
                                        <div className='col-span-3'>
                                            <div className='text-white text-[.9rem] pb-1'>Game name</div>
                                            <input type='text' value={tldata.game_name} name='game_name' onChange={(e) => handelOnchange(e)} className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                        </div>
                                        <div className='col-span-3'>
                                            <div className='text-white text-[.9rem] pb-1'>Amount</div>
                                            <input type='text' value={tldata.amount} name='amount' onChange={(e) => handelOnchange(e)} className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                        </div>
                                        <div className='col-span-3'>
                                            <div className='text-white text-[.9rem] pb-1'>Account name</div>
                                            <input type='text' value={tldata.account_name} name='account_name' onChange={(e) => handelOnchange(e)} className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                        </div>
                                        <div className='col-span-3'>
                                            <div className='text-white text-[.9rem] pb-1'>Remark</div>
                                            <input type='text' name='remark' value={tldata.remark} onChange={(e) => handelOnchange(e)} className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                        </div>
                                    </div>
                                    {/* Add */}
                                    <div className='pt-5 flex justify-center'>
                                        <button onClick={tlEditdata?EditTlData:handleadddata} className='gradient-red text-white px-5 py-1 rounded-md hover:scale-90 transition-all'>Add</button>
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

export default TlEntryModal
