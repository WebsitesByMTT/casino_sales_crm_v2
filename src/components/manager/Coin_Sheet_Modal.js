import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { IoMdClose } from 'react-icons/io'

const Coin_Sheet_Modal = ({closecoinsheet}) => {

    const closeModal=()=>{
      closecoinsheet(false)
    }

    //Get Input Typed Data 
    const [coindata,setCoinData]=useState({
        Initial_coins:"",
        spent:"",
        remaining:"",
        incentive:""
    })

    //onChange Function
    const handelChange=(e)=>{
        const {name,value}=e.target
        setCoinData({...coindata,[name]:value})
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
                                    <div className='col-span-4'>
                                        <div className='text-white text-[.9rem] pb-1'>Initial coins</div>
                                        <input type='text' value={coindata.Initial_coins} onChange={(e)=>handelChange(e)} name='Initial_coins'  className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                    </div>
                                    <div className='col-span-4'>
                                        <div className='text-white text-[.9rem] pb-1'>Spend</div>
                                        <input type='text' name='spent' value={coindata.spent} onChange={(e)=>handelChange(e)} className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                    </div>
                                    <div className='col-span-4'>
                                        <div className='text-white text-[.9rem] pb-1'>Remaining</div>
                                        <input type='text' name='remaining' value={coindata.remaining} onChange={(e)=>handelChange(e)} className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                    </div>
                                </div>
                                {/* Add */}
                                <div className='pt-5 flex justify-center'>
                                    <button className='gradient-red text-white px-5 py-1 rounded-md hover:scale-90 transition-all'>Add</button>
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

export default Coin_Sheet_Modal
