import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
const Fresh_Messages = () => {

    //Agent Fresh Messages Dummyn Data
    const data = [
        {
            id: 1,
            Employ_Name: '2025-04-12, 16:13:43',
            Designation: '12/04/24',
            Salary: 'Rohan',
            Incentive: "Casino",
            Total_Salary: 4000,
            Review: 'Dummy Name',
        }
    ]
    return (
        <div className='text-white pt-10 w-[85%] mx-auto'>
            <div className='h-[80vh] overflow-y-scroll'>
                {/* Table */}
                <table className='w-full'>
                    <thead >
                        <tr className='text-center text-[.9rem] border-b-[2px] border-[#D84F67]'>
                            <td className='border-r-[2px] border-[#D84F67] mb-2 py-1'>Agent Name</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>Time Stamp</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>SDate</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>Incentive</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>Total Salary</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>Review</td>
                            <td className='py-1'>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, ind) => (
                                <tr key={ind} className='text-[#8B8B8C] text-center text-[.9rem]'>
                                    <th className='py-5  font-normal'>{item?.Employ_Name}</th>
                                    <th className='py-5  font-normal'>{item?.Designation}</th>
                                    <th className='py-5  font-normal'>{item?.Salary}</th>
                                    <th className='py-5  font-normal'>{item?.Incentive}</th>
                                    <th className='py-5  font-normal'>{item?.Total_Salary}</th>
                                    <th className='py-5  font-normal'>{item?.Review}</th>
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

export default Fresh_Messages
