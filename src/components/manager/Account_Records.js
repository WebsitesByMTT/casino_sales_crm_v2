import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { API_PATH } from '../../app/apiconfig/Apipath'
import Loader from '../../app/utility/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { EditData, ModalType, UpdateTable } from '../../app/redux/ReduxSlice'
import Delete_Modal from '../delete/Delete_Modal'
import { GetAccountRecord } from '../../app/apiconfig/Apis'

const Account_Records = () => {


    const dispatch = useDispatch() //useDispatch 
    const state = useSelector((state) => state.globlestate.TableState) //Geting Updated State From Redux

    //Get Account Records Api
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)
    const handelAccountRecordsList = async () => {
        try {
            setLoad(true)
            const response = await GetAccountRecord()
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
        handelAccountRecordsList()
    }, [state])

    //Delete Account Records Data
    const [deletedata,setDeleteData]=useState()
    const closedeletemodal=(state)=>{
        setDeleteData(state)
    }

    const handelEdit=(data)=>{
        dispatch(EditData(data))
        dispatch(ModalType('account'))
    }

    return (
        <>
            <div className='text-white pt-10 w-[85%] mx-auto'>
                <div className='h-[80vh]'>
                    {/* Table */}
                    <table className='w-full'>
                        <thead >
                            <tr className='text-center text-[100%] border-b-[2px] border-[#D84F67]'>
                                <td className='border-r-[2px] border-[#D84F67] mb-2 py-1'>User Name</td>
                                <td className='border-r-[2px] border-[#D84F67] py-1'>Password</td>
                                <td className='border-r-[2px] border-[#D84F67] py-1'>Status</td>
                                <td className='border-r-[2px] border-[#D84F67] py-1'>FB account Link</td>
                                <td className='border-r-[2px] border-[#D84F67] py-1'>Agent Name</td>
                                <td className='py-1'>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item, ind) => (
                                    <tr key={ind} className='text-[#8B8B8C] text-center text-[100%]'>
                                        <th className='py-5  font-normal'>{item?.userName}</th>
                                        <th className='py-5  font-normal'>{item?.password.substring(0, 10)}</th>
                                        <th className='py-5  font-normal'>{item?.status ? "Active" : "InActive"}</th>
                                        <th className='py-5  font-normal'>{item?.fbLink}</th>
                                        <th className='py-5  font-normal'>{item?.agentName}</th>
                                        <th className='py-5  font-normal'>
                                            <div className='flex items-center justify-center space-x-2'>
                                                <FaEdit onClick={()=>handelEdit(item)} size={20} className='cursor-pointer hover:scale-125 hover:text-blue-500 transition-all' />
                                                <MdDelete onClick={()=>setDeleteData(item?.userName)} size={20} className='cursor-pointer hover:scale-125 hover:text-red-500 transition-all' />
                                            </div>
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div >
            </div>
            <Loader show={load} />
            {deletedata&&<Delete_Modal closedeletemodal={closedeletemodal} deletedata={API_PATH.apiDeleteAccountRecords+deletedata}/>}
        </>
    )
}

export default Account_Records
