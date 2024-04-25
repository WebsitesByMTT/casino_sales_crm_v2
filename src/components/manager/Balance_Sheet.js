import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { API_PATH } from '../../app/apiconfig/Apipath';
import Loader from '../../app/utility/Loader';
import Balance_Sheet_Modal from './Balance_Sheet_Modal';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateTable } from '../../app/redux/ReduxSlice';
import Delete_Modal from '../delete/Delete_Modal';
import { GetBalanceSheet } from '../../app/apiconfig/Apis';

const Balance_Sheet = () => {

    const dispatch=useDispatch() //Use Dispatch
    const state = useSelector((state) => state?.globlestate.TableState) //Geting Updated State From Redux
    //Get Balance Sheet Api 
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false) //Api Loading State

    const handelGetBalanceSheet = async () => {
        try {
            setLoad(true)
            const response = await GetBalanceSheet()
            if (response) {
                setData(response)
                dispatch(UpdateTable(false))
            } else {
                setData([])
            }
            setLoad(false)
        } catch (error) {
            setLoad(false)
        }
    }
    useEffect(() => {
        handelGetBalanceSheet()
    }, [state])

    //Balance Sheet Data For Edit
    const [edit,setEdit]=useState()
    const closeBalanceSheet=(state)=>{
        setEdit(state)
    }

    //Delete Data
    const [deletedata,setDeleteData]=useState()
    const closedeletemodal=(state)=>{
        setDeleteData(state)
    }

    return (
        <>
            <div className='text-white pt-10 w-[90%] mx-auto'>
                <div className='h-[80vh]'>
                    {/* Table */}
                    <table className='w-full'>
                        <thead >
                            <tr className='text-center text-[100%] border-b-[2px] border-[#D84F67]'>
                                <td className='border-r-[2px] border-[#D84F67] mb-2 py-1'>Employe name</td>
                                <td className='border-r-[2px] border-[#D84F67] py-1'>Designation</td>
                                <td className='border-r-[2px] border-[#D84F67] py-1'>Salary</td>
                                <td className='border-r-[2px] border-[#D84F67] py-1'>Incentive</td>
                                <td className='border-r-[2px] border-[#D84F67] py-1'>Total Salary</td>
                                <td className='border-r-[2px] border-[#D84F67] py-1'>Review</td>
                                <td className='py-1'>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item, ind) => (
                                    <tr key={ind} className='text-[#8B8B8C] text-center text-[100%]'>
                                        <th className='py-5  font-normal'>{item?.employeeName}</th>
                                        <th className='py-5  font-normal'>{item?.designation}</th>
                                        <th className='py-5  font-normal'>{item?.salary}</th>
                                        <th className='py-5  font-normal'>{item?.incentive}</th>
                                        <th className='py-5  font-normal'>{item?.totalSalary}</th>
                                        <th className='py-5  font-normal'>{item?.review}</th>
                                        <th className='py-5  font-normal'>
                                            <div className='flex items-center justify-center space-x-2'>
                                                <FaEdit onClick={()=>setEdit(item)} size={20} className='cursor-pointer hover:scale-125 hover:text-blue-500 transition-all' />
                                                <MdDelete onClick={()=>setDeleteData(item?.employeeName)} size={20} className='cursor-pointer hover:scale-125 hover:text-red-500 transition-all' />
                                            </div>
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div >
            </div >
            <Loader show={load} />
            {edit&&<Balance_Sheet_Modal closeBalanceSheet={closeBalanceSheet} editdata={edit}/>}
            {deletedata&&<Delete_Modal deletedata={API_PATH.apiDeleteBalanceSheet+deletedata} closedeletemodal={closedeletemodal}/>}
        </>
    )
}

export default Balance_Sheet
