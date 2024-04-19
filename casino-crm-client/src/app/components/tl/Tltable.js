import React from 'react'

const Tltable = () => {

    //TL Dummy Table Data
    const data = [
        {
            id: 1,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Rohan',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 2,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Sohan',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 3,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Raman',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 4,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Lalit',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 5,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Raju',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 6,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Neeraj',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 7,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Suman',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 8,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Radhika',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 9,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Shyam',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        }
        ,
        {
            id: 10,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Rahul',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 11,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Amit',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 12,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Lakshmi',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 13,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Mangal',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 14,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Raj',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 15,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Pawan',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 16,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Komal',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 17,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Rani',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 18,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Roshan',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 19,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Boby',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        },
        {
            id: 20,
            Time_Stamp: '2025-04-12, 16:13:43',
            Date: '12/04/24',
            Customer_Name: 'Sapna',
            Game_Name: "Casino",
            Amount: 4000,
            Acount_Name: 'Dummy Name',
            Remarks: 'Dummy'
        }
    ]

    return (
        <div className='text-white w-[85%] mx-auto'>
            <div className='h-[80vh] overflow-y-scroll'>
                {/* Table */}
                <table className='w-full'>
                    <thead >
                        <tr className='text-center text-[.9rem] border-b-[2px] border-[#D84F67]'>
                            <td className='border-r-[2px] border-[#D84F67] mb-2 py-1'>Time Stamp</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>Date</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>Customer Name</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>Game Name</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>Amount</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>Account Name</td>
                            <td className='py-1'>Remarks</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, ind) => (
                                <tr key={ind} className='text-[#8B8B8C] text-[.9rem]'>
                                    <th className='py-5  font-normal'>{item?.Time_Stamp}</th>
                                    <th className='py-5  font-normal'>{item?.Date}</th>
                                    <th className='py-5  font-normal'>{item?.Customer_Name}</th>
                                    <th className='py-5  font-normal'>{item?.Game_Name}</th>
                                    <th className='py-5  font-normal'>{item?.Amount}</th>
                                    <th className='py-5  font-normal'>{item?.Acount_Name}</th>
                                    <th className='py-5  font-normal'>{item?.Remarks}</th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div >
        </div >
    )
}

export default Tltable
