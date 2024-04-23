import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
const Fresh_Messages = () => {

    //Agent Fresh Messages Dummyn Data
    const data = [
        {
            id: 1,
            Agent_Name:'Kapil Raj',
            Time_Stamp:'Time Stamp',
            Date:'23/04/2024',
            System_Number:675456,
            Account_Name:"Account Name",
            Player_Id:"FB ID",
            Remark:'Excellent'
        },
        {
            id: 2,
            Agent_Name:'Kapil Raj',
            Time_Stamp:'Time Stamp',
            Date:'23/04/2024',
            System_Number:675456,
            Account_Name:"Account Name",
            Player_Id:"FB ID",
            Remark:'Excellent'
        },
        {
            id: 3,
            Agent_Name:'Kapil Raj',
            Time_Stamp:'Time Stamp',
            Date:'23/04/2024',
            System_Number:675456,
            Account_Name:"Account Name",
            Player_Id:"FB ID",
            Remark:'Excellent'
        },
        {
            id: 4,
            Agent_Name:'Kapil Raj',
            Time_Stamp:'Time Stamp',
            Date:'23/04/2024',
            System_Number:675456,
            Account_Name:"Account Name",
            Player_Id:"FB ID",
            Remark:'Excellent'
        },
        {
            id: 5,
            Agent_Name:'Kapil Raj',
            Time_Stamp:'Time Stamp',
            Date:'23/04/2024',
            System_Number:675456,
            Account_Name:"Account Name",
            Player_Id:"FB ID",
            Remark:'Excellent'
        },
        {
            id: 6,
            Agent_Name:'Kapil Raj',
            Time_Stamp:'Time Stamp',
            Date:'23/04/2024',
            System_Number:675456,
            Account_Name:"Account Name",
            Player_Id:"FB ID",
            Remark:'Excellent'
        },
        {
            id: 7,
            Agent_Name:'Kapil Raj',
            Time_Stamp:'Time Stamp',
            Date:'23/04/2024',
            System_Number:675456,
            Account_Name:"Account Name",
            Player_Id:"FB ID",
            Remark:'Excellent'
        },
        {
            id: 8,
            Agent_Name:'Kapil Raj',
            Time_Stamp:'Time Stamp',
            Date:'23/04/2024',
            System_Number:675456,
            Account_Name:"Account Name",
            Player_Id:"FB ID",
            Remark:'Excellent'
        },
        {
            id: 9,
            Agent_Name:'Kapil Raj',
            Time_Stamp:'Time Stamp',
            Date:'23/04/2024',
            System_Number:675456,
            Account_Name:"Account Name",
            Player_Id:"FB ID",
            Remark:'Excellent'
        },
        {
            id:10,
            Agent_Name:'Kapil Raj',
            Time_Stamp:'Time Stamp',
            Date:'23/04/2024',
            System_Number:675456,
            Account_Name:"Account Name",
            Player_Id:"FB ID",
            Remark:'Excellent'
        },
        {
            id:11,
            Agent_Name:'Kapil Raj',
            Time_Stamp:'Time Stamp',
            Date:'23/04/2024',
            System_Number:675456,
            Account_Name:"Account Name",
            Player_Id:"FB ID",
            Remark:'Excellent'
        }
    ]
    return (
        <div className='text-white pt-10 w-[85%] mx-auto'>
            <div className='h-[80vh]'>
                {/* Table */}
                <table className='w-full'>
                    <thead >
                        <tr className='text-center text-[.9rem] border-b-[2px] border-[#D84F67]'>
                            <td className='border-r-[2px] border-[#D84F67] mb-2 py-1'>Agent Name</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>Time Stamp</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>Date</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>System Number</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>Account Name</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>Player ID / Receiver Facebook ID</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>Remarks</td>
                            <td className='py-1'>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, ind) => (
                                <tr key={ind} className='text-[#8B8B8C] text-center text-[.9rem]'>
                                    <th className='py-5  font-normal'>{item?.Agent_Name}</th>
                                    <th className='py-5  font-normal'>{item?.Time_Stamp}</th>
                                    <th className='py-5  font-normal'>{item?.Date}</th>
                                    <th className='py-5  font-normal'>{item?.System_Number}</th>
                                    <th className='py-5  font-normal'>{item?.Account_Name}</th>
                                    <th className='py-5  font-normal'>{item?.Player_Id}</th>
                                    <th className='py-5  font-normal'>{item?.Remark}</th>
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
