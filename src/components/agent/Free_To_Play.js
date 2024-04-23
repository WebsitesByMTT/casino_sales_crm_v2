import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { getUserDetails } from '../../app/utility/session/Cookies'
import axios from 'axios'
import { BASE_URL } from '../../app/apiconfig/Baseurl'
import { API_PATH } from '../../app/apiconfig/Apipath'
import Loader from '../../app/utility/Loader'

const Free_To_Play = () => {

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
    const [data,setData]=useState([])
    const [load,setLoad]=useState(false)
    const handelGetFreePlayData=async()=>{
        try {
            setLoad(true)
            const response = await axios.get(BASE_URL+API_PATH.apiGetFreeToPlay)
            if(response?.data?.status===true){
               setData(response.data.agentList)
            }
            setLoad(false)
        } catch (error) {
          setLoad(false)  
        }
    }

    useEffect(()=>{
      handelGetFreePlayData()
    },[])

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
                            <th className='py-1'>Action</th>
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
                                    <td className='py-5  font-normal'>
                                        <div className='flex items-center justify-center space-x-2'>
                                            <FaEdit size={20} className='cursor-pointer hover:scale-125 hover:text-blue-500 transition-all' />
                                            {userdetail?.designation==="Agent"?null:<MdDelete size={20} className='cursor-pointer hover:scale-125 hover:text-red-500 transition-all' />}
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
        </>
    )
}

export default Free_To_Play
