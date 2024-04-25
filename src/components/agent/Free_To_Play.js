import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { getUserDetails } from '../../app/utility/session/Cookies'
import { API_PATH } from '../../app/apiconfig/Apipath'
import Loader from '../../app/utility/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateTable } from '../../app/redux/ReduxSlice'
import Free_To_Play_Modal from './Free_To_Play_Modal'
import Delete_Modal from '../delete/Delete_Modal'
import { GetAgent } from '../../app/apiconfig/Apis'

const Free_To_Play = ({ tabclicked }) => {

    const dispatch = useDispatch()
    const state = useSelector((state) => state.globlestate.TableState) //Geting Updated State From Redux


    const [userdetail, setUserDetail] = useState({})
    async function getUser() {
        const userDetails = await getUserDetails();
        setUserDetail(userDetails)
    }
    useEffect(() => {
        getUser()
    }, [])
    //Get UserDetails

    //Get Free To Play Api 
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)
    const handelGetFreePlayData = async () => {
        try {
            setLoad(true)
            const response = await GetAgent(tabclicked)
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
        handelGetFreePlayData()
    }, [state])

    //Edit Agent
    const [editagent,setEditAgent]=useState()
    const closeThisModal=(state)=>{
        setEditAgent(state)
    }

    //Delete Agent 
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
                                <th className='border-r-[2px] border-[#D84F67] mb-2 py-1'>Agent Name</th>
                                <th className='border-r-[2px] border-[#D84F67] py-1'>Date</th>
                                <th className='border-r-[2px] border-[#D84F67] py-1'>Customer name/ FB ID</th>
                                <th className='border-r-[2px] border-[#D84F67] py-1'>Game Name</th>
                                <th className='border-r-[2px] border-[#D84F67] py-1'>Amount of Coins</th>
                                <th className='border-r-[2px] border-[#D84F67] py-1'>Account Name</th>
                                <th className='border-r-[2px] border-[#D84F67] py-1'>Remarks</th>
                                {tabclicked==="freetoplay"&&<th className='py-1'>Action</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item, ind) => (
                                    <tr key={ind} className='text-[#8B8B8C] text-center text-[100%]'>
                                        <td className='py-5  font-normal'>{item?.agentName}</td>
                                        <td className='py-5  font-normal'>{new Date(item?.date).toLocaleString('en-US', { day: '2-digit', month: 'short', year: '2-digit' })}</td>
                                        <td className='py-5  font-normal'>{item?.customerName}</td>
                                        <td className='py-5  font-normal'>{item?.gameName}</td>
                                        <td className='py-5  font-normal'>{item?.amountOfCoins}</td>
                                        <td className='py-5  font-normal'>{item?.accountName}</td>
                                        <td className='py-5  font-normal'>{item?.remarks}</td>
                                        {tabclicked==="freetoplay"&&<td className='py-5  font-normal'>
                                            <div className='flex items-center justify-center space-x-2'>
                                                <FaEdit onClick={()=>setEditAgent(item)} size={20} className='cursor-pointer hover:scale-125 hover:text-blue-500 transition-all' />
                                                {userdetail?.designation === "Agent" ? null : <MdDelete onClick={()=>setDeleteData(item?.agentName)} size={20} className='cursor-pointer hover:scale-125 hover:text-red-500 transition-all' />}
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
            {editagent&&<Free_To_Play_Modal tabclicked={tabclicked} editagent={editagent} closeThisModal={closeThisModal}/>}
            {deletedata&&<Delete_Modal closedeletemodal={closedeletemodal} deletedata={API_PATH.apiDeleteAgent+tabclicked+'/'+deletedata}/>}
        </>
    )
}

export default Free_To_Play
