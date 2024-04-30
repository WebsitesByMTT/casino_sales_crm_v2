import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { EditData, ModalType, UpdateTable } from '../../app/redux/ReduxSlice'
import { GetDeposit } from '../../app/apiconfig/Apis'
import Loader from '../../app/utility/Loader'
import Delete_Modal from '../delete/Delete_Modal'
import { API_PATH } from '../../app/apiconfig/Apipath'

const Deposit_By_Manager = () => {
    const state = useSelector((state) => state.globlestate.TableState)
    const [load,setLoad]=useState(false)
    const dispatch=useDispatch()
    const [data,setData]=useState([])
    const handelgetDeposit=async()=>{
        try {
            setLoad(true)
            const response= await GetDeposit()
            if(response){
                setData(response)
                dispatch(UpdateTable(false))
            }
            setLoad(false)
        } catch (error) {
            setLoad(false)
        }
    }

    useEffect(()=>{
      handelgetDeposit()
    },[state])

    const handelEdit = (data) => {
        dispatch(EditData(data))
        dispatch(ModalType('deposit'))
    }
    const [deletedata,setDeleteData]=useState()
    const closedeletemodal=(state)=>{
         setDeleteData(state)
    }
    return (
        <>
        <div className='text-white pt-10 w-[85%] mx-auto'>
            <div className='h-[80vh]'>
                {/* Table */}
                <table className='w-full'>
                    <thead >
                        <tr className='text-center text-[100%] border-b-[2px] border-[#D84F67]'>
                            <th className='border-r-[2px] border-[#D84F67] mb-2 py-1'>Customer Name</th>
                            <th className='border-r-[2px] border-[#D84F67] py-1'>Cash In</th>
                            <th className='border-r-[2px] border-[#D84F67] py-1'>Cash Out</th>
                            <th className='border-r-[2px] border-[#D84F67] py-1'>Net/By Day and also for night</th>
                            <th className='py-1'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, ind) => (
                                <tr key={ind} className='text-[#8B8B8C] text-center text-[100%]'>
                                    <td className='py-5  font-normal'>{item?.customerName}</td>
                                    <td className='py-5  font-normal'>{item?.cashIn}</td>
                                    <td className='py-5  font-normal'>{item?.cashOut}</td>
                                    <td className='py-5  font-normal'>{item?.net}</td>
                                     <td className='py-5  font-normal'>
                                        <div className='flex items-center justify-center space-x-2'>
                                            <FaEdit onClick={() => handelEdit(item)} size={20} className='cursor-pointer hover:scale-125 hover:text-blue-500 transition-all' />
                                            <MdDelete onClick={() => setDeleteData(item?.customerName)} size={20} className='cursor-pointer hover:scale-125 hover:text-red-500 transition-all' />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div >
        </div>
        <Loader show={load}/>
        {deletedata&&<Delete_Modal closedeletemodal={closedeletemodal} deletedata={API_PATH.apiDeleteDeposit+deletedata}/>}

        </>
    )
}

export default Deposit_By_Manager
