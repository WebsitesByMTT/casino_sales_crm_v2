import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { API_PATH } from '../../app/apiconfig/Apipath'
import Loader from '../../app/utility/Loader'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { EditData, ModalType, UpdateTable } from '../../app/redux/ReduxSlice'
import { getUserDetails } from '../../app/utility/session/Cookies'
import Delete_Modal from '../delete/Delete_Modal'
import { GetTlData } from '../../app/apiconfig/Apis'


const Tltable = () => {
    const [userdetail, setUserDetail] = useState({})
    const state = useSelector((state) => state.globlestate.TableState)
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)
    const dispatch = useDispatch()
    async function getUser() {
        const userDetails = await getUserDetails();
        setUserDetail(userDetails)
    }
    useEffect(() => {
        getUser()
    }, [])
    const handelGetTlData = async () => {
        try {
            setLoad(true)
            const response = await GetTlData()
            if (response) {
                setData(response)
                dispatch(UpdateTable(false))
            } else {
                setData([])
                toast('Something went wrong', { type: 'error' })
            }
            setLoad(false)
        } catch (error) {
            setLoad(false)
        }
    }
    useEffect(() => {
        handelGetTlData()
    }, [state])
    const [deletedata, setDeleteData] = useState()
    const closedeletemodal = (state) => {
        setDeleteData(state)
    }
    const handelEdit = (data) => {
        dispatch(EditData(data))
        dispatch(ModalType('tl'))
    }
    return (
        <>
            <div className='text-white pt-10 md:w-[96%] lg:w-[90%] xl:w-[85%] mx-auto'>
                <div className='h-[80vh]'>
                    {/* Table */}
                    <table className='w-full'>
                        <thead >
                            <tr className='text-center text-[100%] border-b-[2px] border-[#D84F67]'>
                                <th className='border-r-[2px] border-[#D84F67] mb-2 py-1'>Time Stamp</th>
                                <th className='border-r-[2px] border-[#D84F67] py-1'>Date</th>
                                <th className='border-r-[2px] border-[#D84F67] py-1'>Customer Name</th>
                                <th className='border-r-[2px] border-[#D84F67] py-1'>Game Name</th>
                                <th className='border-r-[2px] border-[#D84F67] py-1'>Amount</th>
                                <th className='border-r-[2px] border-[#D84F67] py-1'>Account Name</th>
                                <th className='py-1 border-r-[2px] border-[#D84F67]'>Remarks</th>
                                <th className='py-1'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item, ind) => (
                                    <tr key={ind} className='text-[#8B8B8C] text-[100%] text-center'>
                                        <td className='py-3  font-normal'>{item?.createdAt}</td>
                                        <td className='py-3  font-normal'>{new Date(item?.date).toLocaleString('en-US', { day: '2-digit', month: 'short', year: '2-digit' })}</td>
                                        <td className='py-3  font-normal'>{item?.customerName}</td>
                                        <td className='py-3  font-normal'>{item?.gameName}</td>
                                        <td className='py-3  font-normal'>{item?.amount}</td>
                                        <td className='py-3  font-normal'>{item?.accountName}</td>
                                        <td className='py-3  font-normal'>{item?.remarks.substring(10, 0)}...</td>
                                        <td className='py-3 font-normal'>
                                            <div className='flex items-center justify-center space-x-2'>
                                                <FaEdit onClick={() => handelEdit(item)} size={20} className='cursor-pointer hover:scale-125 hover:text-blue-500 transition-all' />
                                                {userdetail?.designation === "TL" ? null : <MdDelete onClick={() => setDeleteData(item?.customerName)} size={20} className='cursor-pointer hover:scale-125 hover:text-red-500 transition-all' />}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div >
            </div>
            <Loader show={load} />
            {deletedata && <Delete_Modal closedeletemodal={closedeletemodal} deletedata={API_PATH.apiDeleteTl + deletedata} />}
        </>
    )
}

export default Tltable
