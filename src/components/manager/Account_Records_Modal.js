import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import React, { Fragment, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { BASE_URL } from '../../app/apiconfig/Baseurl'
import { API_PATH } from '../../app/apiconfig/Apipath'
import { BearerToken } from '../../app/utility/session/Cookies'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { UpdateTable } from '../../app/redux/ReduxSlice'
import Button from '../button/Button'
import InputField from '../input/InputField'

const Account_Records_Modal = ({ closeaccountrecord, editrecord }) => {
    const dispatch = useDispatch() //Use Dispatch


    const closeModal = () => {
        closeaccountrecord(false)
    }

    //Get Input Typed Data
    const [accountdata, setAccountdata] = useState({
        userName: editrecord?.userName,
        password: editrecord?.password,
        status: editrecord?.status,
        fbLink: editrecord?.fbLink,
        agentName: editrecord?.agentName
    })

    //OnChange Function
    const handelOnChange = (e) => {
        const { name, value } = e.target
        setAccountdata({ ...accountdata, [name]: value })
    }

    //Add Account Records Api
    const handeladdaccountrecord = async () => {
        if (!accountdata.userName) {
            toast('Enter UserName', { type: 'error' })
        } else if (!accountdata.password) {
            toast('Enter Password', { type: 'error' })
        } else if (!accountdata.status) {
            toast('Enter Status', { type: 'error' })
        } else if (!accountdata.fbLink) {
            toast('Enter FaceBook Link', { type: 'error' })
        } else if (!accountdata.agentName) {
            toast('Enter Agent Name', { type: 'error' })
        }else {
            try {
                const response = await axios.post(BASE_URL + API_PATH.apiAddAccountRecord, accountdata, BearerToken)
                if (response.data.status === true) {
                    toast(response.data.status, { type: 'success' })
                    closeModal()
                    dispatch(UpdateTable(true))
                } else {
                    toast(response.data.error, { type: 'error' })
                    closeModal()
                }
            } catch (error) {

            }
        }

    }

    //Api Account Records Sheet Data
    const handelaccountedit = async () => {
        try {
            const response = await axios.put(BASE_URL + API_PATH.apiEditAccountRecords + editrecord?.userName, accountdata, BearerToken)
            if (response?.data?.status === true) {
                toast(response.data.message, { type: 'success' })
                closeModal()
                dispatch(UpdateTable(true))
            } else {
                toast(response?.data?.error, { type: 'error' })
                closeModal()
            }
        } catch (error) {

        }
    }


    return (
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
                                        <div className='text-white text-[.9rem] pb-1'>User Name</div>
                                        <InputField Type={'text'} Name={'userName'} Value={accountdata.userName} changeEvent={(e) => handelOnChange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'}/>
                                    </div>
                                    <div className='col-span-3'>
                                        <div className='text-white text-[.9rem] pb-1'>Password</div>
                                        <InputField Type={'text'} Name={'password'} Value={accountdata.password} changeEvent={(e) => handelOnChange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'}/>
                                    </div>
                                    <div className='col-span-3'>
                                        <div className='text-white text-[.9rem] pb-1'>Status</div>
                                        <InputField Type={'text'} Name={'status'} Value={accountdata.status} changeEvent={(e) => handelOnChange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'}/>
                                    </div>
                                    <div className='col-span-3'>
                                        <div className='text-white text-[.9rem] pb-1'>FB Account Link</div>
                                        <InputField Type={'text'} Name={'fbLink'} Value={accountdata.fbLink} changeEvent={(e) => handelOnChange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'}/>
                                    </div>
                                    <div className='col-span-3'>
                                        <div className='text-white text-[.9rem] pb-1'>Agent Name Using This FB Account</div>
                                        <InputField Type={'text'} Name={'agentName'} Value={accountdata.agentName} changeEvent={(e) => handelOnChange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'}/>
                                    </div>
                                </div>
                                {/* Add */}
                                <div className='pt-5 flex justify-center'>
                                    <Button clickevent={editrecord ? handelaccountedit : handeladdaccountrecord} text={'Add'} style={'gradient-red text-white px-5 py-1 rounded-md hover:scale-90 transition-all'}/>
                                </div>
                                {/* Close Icon */}
                                <IoMdClose onClick={closeModal} size={25} className='absolute top-1 cursor-pointer hover:scale-105 transition-all z-10 gradient-red rounded-full right-3' />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Account_Records_Modal
