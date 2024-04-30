import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { getUserDetails } from '../../app/utility/session/Cookies';
import { GetDepositByAgent } from '../../app/apiconfig/Apis';
import Loader from '../../app/utility/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { EditData, ModalType, UpdateTable } from '../../app/redux/ReduxSlice';
import Delete_Modal from '../delete/Delete_Modal';
import { API_PATH } from '../../app/apiconfig/Apipath';

const Deposit_By_Agent = () => {
    const dispatch=useDispatch()
    const state = useSelector((state) => state.globlestate.TableState)
    const [userdetail, setUserDetail] = useState()
    const [load, setLoad] = useState(false)
    async function getUser() {
        const userDetails = await getUserDetails();
        if (userDetails) {
            setUserDetail(userDetails)
        }
    }
    useEffect(() => {
        getUser()
    }, [])
    const [data, setData] = useState([])

    const handeldeposit = async () => {
        try {
            setLoad(true)
            const response = await GetDepositByAgent()
            if (response) {
                setData(response)
                dispatch(UpdateTable(false))
            }
            setLoad(false)
        } catch (error) {
            setLoad(false)
        }
    }
    useEffect(() => {
        handeldeposit()
    }, [state])
    const handelEdit = (data) => {
        dispatch(EditData(data))
        dispatch(ModalType('byagent'))
    }
    const [deletedata,setDeleteData]=useState()
    const closedeletemodal=(state)=>{
         setDeleteData(state)
    }

    return (
        <>
            <div className='text-white pt-10 md:w-[96%] lg:w-[90%] xl:w-[85%] mx-auto'>
                <div className='h-[80vh]'>
                    {/* Table */}
                    <table className='w-full'>
                        <thead >
                            <tr className='text-center text-[100%] border-b-[2px] border-[#D84F67]'>
                                <th className='border-r-[2px] border-[#D84F67] mb-2 py-1'>Cash in</th>
                                <th className='border-r-[2px] border-[#D84F67] py-1'>Cash out</th>
                                <th className='border-r-[2px] border-[#D84F67] py-1'>Net</th>
                                {userdetail?.designation === "Agent" ? null : <th className='py-1'>Action</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item, ind) => (
                                    <tr key={ind} className='text-[#8B8B8C] text-[100%] text-center'>
                                        <td className='py-3  font-normal'>{item?.cashIn}</td>
                                        <td className='py-3  font-normal'>{item?.cashOut}</td>
                                        <td className='py-3  font-normal'>{item?.net}</td>
                                        {userdetail?.designation === "Agent" ? null : <td className='py-3 font-normal'>
                                            <div className='flex items-center justify-center space-x-2'>
                                                <FaEdit onClick={() => handelEdit(item)} size={20} className='cursor-pointer hover:scale-125 hover:text-blue-500 transition-all' />
                                                <MdDelete onClick={() => setDeleteData(item?.cashIn)} size={20} className='cursor-pointer hover:scale-125 hover:text-red-500 transition-all' />
                                            </div>
                                        </td>}
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div >
            </div>
            <Loader show={load} />
            {deletedata&&<Delete_Modal closedeletemodal={closedeletemodal} deletedata={API_PATH.DeleteByAgent+deletedata}/>}
        </>
    )
}

export default Deposit_By_Agent
