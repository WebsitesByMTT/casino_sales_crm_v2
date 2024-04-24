import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import React, { Fragment, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { BASE_URL } from '../../app/apiconfig/Baseurl'
import { toast } from 'react-toastify'
import { BearerToken } from '../../app/utility/session/Cookies'
import Loader from '../../app/utility/Loader'
import { useDispatch } from 'react-redux'
import { UpdateTable } from '../../app/redux/ReduxSlice'

const Delete_Modal = ({deletedata,closedeletemodal}) => {
    const closeModal=()=>[
       closedeletemodal(false)
    ]

    const dispatch=useDispatch() //Use Dispatch
    //Handel Delete Api
    const [load,setLoad]=useState(false)
    const handelDeleteApi=async()=>{
        try {
            setLoad(true)
            const response = await axios.delete(BASE_URL+deletedata,BearerToken)
            if(response.data.status===true){
              toast('Deleted',{type:'success'})
               dispatch(UpdateTable(true))
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
                                <Dialog.Panel className="w-[70%] md:w-[30%] relative transform overflow-hidden rounded-xl border-[2px] border-[#00A5FF] bg-[#2A2A2B] p-3 py-8 text-left align-middle shadow-xl transition-all">
                                     <div className='text-center text-[100%] text-white'>Are You Want To Delete ?</div>
                                    <div className='pt-8 flex justify-center space-x-5'>
                                        <button onClick={handelDeleteApi} className='gradient-red text-white px-5 py-1 rounded-md hover:scale-90 transition-all'>Yes</button>
                                        <button onClick={closeModal} className='bg-green-500 text-white px-5 py-1 rounded-md hover:scale-90 transition-all'>No</button>
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

export default Delete_Modal
