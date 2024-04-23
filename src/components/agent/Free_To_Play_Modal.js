import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { IoMdClose } from 'react-icons/io'

const Free_To_Play_Modal = ({closeThisModal}) => {

    //Close Modal
    const closeModal=()=>{
      closeThisModal(false)
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
                                        <div className='text-white text-[.9rem] pb-1'>Agent Name</div>
                                        <input type='text' name='agentname'  className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                    </div>
                                    <div className='col-span-3'>
                                        <div className='text-white text-[.9rem] pb-1'>Customer Name/FB ID</div>
                                        <input type='text' name='CustomerName'  className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                    </div>
                                    <div className='col-span-3'>
                                        <div className='text-white text-[.9rem] pb-1'>Game Name</div>
                                        <input type='text' name='game_name'  className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                    </div>
                                    <div className='col-span-3'>
                                        <div className='text-white text-[.9rem] pb-1'>Amount Of Coins</div>
                                        <input type='text' name='coins'  className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                    </div>
                                    <div className='col-span-3'>
                                        <div className='text-white text-[.9rem] pb-1'>Account Name</div>
                                        <input type='text' name='account_name'  className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
                                    </div>
                                    <div className='col-span-3'>
                                        <div className='text-white text-[.9rem] pb-1'>Remarks</div>
                                        <input type='text' name='remark'  className='bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full' />
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

export default Free_To_Play_Modal
