import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const Account_Records = () => {

    //Account Records Dummy Data
    const data = [
        {
            id: 1,
            UserName:'Raj',
            Password: 'Raj@123#',
            Status: 'Active',
            FB_Link: "Casino",
            AgentName:4000,
        },
        {
            id: 2,
            UserName:'Raj',
            Password: 'Raj@123#',
            Status: 'Active',
            FB_Link: "Casino",
            AgentName:4000,
        },
        {
            id: 3,
            UserName:'Raj',
            Password: 'Raj@123#',
            Status: 'Active',
            FB_Link: "Casino",
            AgentName:4000,
        },
        {
            id: 4,
            UserName:'Raj',
            Password: 'Raj@123#',
            Status: 'Active',
            FB_Link: "Casino",
            AgentName:4000,
        },
        {
            id: 5,
            UserName:'Raj',
            Password: 'Raj@123#',
            Status: 'Active',
            FB_Link: "Casino",
            AgentName:4000,
        },
        {
            id: 6,
            UserName:'Raj',
            Password: 'Raj@123#',
            Status: 'Active',
            FB_Link: "Casino",
            AgentName:4000,
        }
    ]

    return (
        <div className='text-white pt-10 w-[85%] mx-auto'>
            <div className='h-[80vh] overflow-y-scroll'>
                {/* Table */}
                <table className='w-full'>
                    <thead >
                        <tr className='text-center text-[.9rem] border-b-[2px] border-[#D84F67]'>
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
                                <tr key={ind} className='text-[#8B8B8C] text-center text-[.9rem]'>
                                    <th className='py-5  font-normal'>{item?.UserName}</th>
                                    <th className='py-5  font-normal'>{item?.Password}</th>
                                    <th className='py-5  font-normal'>{item?.Status}</th>
                                    <th className='py-5  font-normal'>{item?.FB_Link}</th>
                                    <th className='py-5  font-normal'>{item?.AgentName}</th>
                                    <th className='py-5  font-normal'>
                                        <div className='flex items-center justify-center space-x-2'>
                                            <FaEdit size={20} className='cursor-pointer hover:scale-125 hover:text-blue-500 transition-all' />
                                            <MdDelete size={20} className='cursor-pointer hover:scale-125 hover:text-red-500 transition-all' />
                                        </div>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div >
        </div >
    )
}

export default Account_Records
