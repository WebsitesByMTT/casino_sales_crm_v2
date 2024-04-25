import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import React, { Fragment, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { BASE_URL } from '../../app/apiconfig/Baseurl'
import { API_PATH } from '../../app/apiconfig/Apipath'
import { toast } from 'react-toastify'
import Loader from '../../app/utility/Loader'
import { useDispatch } from 'react-redux'
import { UpdateTable } from '../../app/redux/ReduxSlice'
import { BearerToken } from '../../app/utility/session/Cookies'
import Button from '../button/Button'
import InputField from '../input/InputField'

const Balance_Sheet_Modal = ({ closeBalanceSheet,editdata }) => {

    const dispatch = useDispatch() //Use Dispatch

    //Close Balance Sheet Modal
    const closeModal = () => {
        closeBalanceSheet(false)
    }

    // Capture Balance Sheet Modal Data
    const [balancedata, setBalancedata] = useState({
        employeeName:editdata?.employeeName,
        designation: editdata?.designation,
        salary: editdata?.salary,
        incentive:editdata?.incentive,
        totalSalary:editdata?.totalSalary,
        review: editdata?.review
    })

    const handelChange = (e) => {
        const { name, value } = e.target
        setBalancedata({ ...balancedata, [name]: value })
    }

    //Api Post Balance Sheet Data
    const [load, setLoad] = useState(false) //Api Loading State
    const handelAddBalanceSheet = async () => {
        if(!balancedata.employeeName){
          toast('Enter Employee Name',{type:'error'})
        }else if(!balancedata.designation){
            toast('Enter Designation',{type:'error'})
        }else if(!balancedata.salary){
            toast('Enter Salary',{type:'error'})
        }else if(!balancedata.incentive){
            toast('Enter Incentive',{type:'error'})
        }else if(!balancedata.totalSalary){
            toast('Enter Total Salary',{type:'error'})
        }else if(!balancedata.review){
            toast('Enter Review',{type:'error'})
        }else{
            try {
                setLoad(true)
                const response = await axios.post(BASE_URL + API_PATH.apiAddBalanceSheet, balancedata,BearerToken)
                if (response?.data?.status === true) {
                    toast(response?.data?.message, { type: 'success' })
                    closeModal()
                    dispatch(UpdateTable(true))
                } else {
                    toast(response?.data?.error, { type: 'error' })
                    closeModal()
                }
                setLoad(false)
            } catch (error) {
                setLoad(false)
            }
        }
      
    }

    //Api Edit Balance Sheet Data
    const EditBalanceSheetData=async()=>{
        try {
            const response=await axios.put(BASE_URL+API_PATH.apiEditBalanceSheet+editdata?.employeeName,balancedata,BearerToken)
            if(response?.data?.status===true){
              toast(response.data.message,{type:'success'})
               closeModal()
               dispatch(UpdateTable(true))
            }else{
                toast(response?.data?.error,{type:'error'})
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
                                            <div className='text-white text-[.9rem] pb-1'>Employe name</div>
                                            <InputField Type={'text'} Name={'employeeName'} Value={balancedata.employeeName} changeEvent={(e) => handelChange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'}/>
                                        </div>
                                        <div className='col-span-3'>
                                            <div className='text-white text-[.9rem] pb-1'>Designation</div>
                                            <InputField Type={'text'} Name={'designation'} Value={balancedata.designation} changeEvent={(e) => handelChange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'}/>
                                        </div>
                                        <div className='col-span-3'>
                                            <div className='text-white text-[.9rem] pb-1'>Salary</div>
                                            <InputField Type={'text'} Name={'salary'} Value={balancedata.salary} changeEvent={(e) => handelChange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'}/>
                                        </div>
                                        <div className='col-span-3'>
                                            <div className='text-white text-[.9rem] pb-1'>Incentive</div>
                                            <InputField Type={'text'} Name={'incentive'} Value={balancedata.incentive} changeEvent={(e) => handelChange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'}/>
                                        </div>
                                        <div className='col-span-3'>
                                            <div className='text-white text-[.9rem] pb-1'>Total Salary</div>
                                            <InputField Type={'text'} Name={'totalSalary'} Value={balancedata.totalSalary} changeEvent={(e) => handelChange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'}/>
                                        </div>
                                        <div className='col-span-3'>
                                            <div className='text-white text-[.9rem] pb-1'>Review</div>
                                            <InputField Type={'text'} Name={'review'} Value={balancedata.review} changeEvent={(e) => handelChange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'}/>
                                        </div>
                                    </div>
                                    {/* Add */}
                                    <div className='pt-5 flex justify-center'>
                                        <Button clickevent={editdata?EditBalanceSheetData:handelAddBalanceSheet} style={'gradient-red text-white px-5 py-1 rounded-md hover:scale-90 transition-all'} text={'Add'}/>
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

export default Balance_Sheet_Modal
