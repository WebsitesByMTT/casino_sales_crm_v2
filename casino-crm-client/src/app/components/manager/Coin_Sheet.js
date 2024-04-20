import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const Coin_Sheet = () => {
    //Balance Sheet Dummy Data
    const data = [
        {
            id: 1,
            Initial_Coins:'345',
            Spent: '45',
            Remaining: '300',
            Incentive: "5000",
        },
        {
            id: 2,
            Initial_Coins:'555',
            Spent: '200',
            Remaining: '355',
            Incentive: "6000",
        },
        {
            id: 3,
            Initial_Coins:'655',
            Spent: '55',
            Remaining:'600',
            Incentive:"5500",
        },
        {
            id: 4,
            Initial_Coins:'400',
            Spent: '100',
            Remaining: '300',
            Incentive: "8000",
        },
        {
            id: 5,
            Initial_Coins:'680',
            Spent: '380',
            Remaining: '300',
            Incentive: "4500",
        }
    ]
    return (
        <div className='text-white pt-10 w-[85%] mx-auto'>
            <div className='h-[80vh] overflow-y-scroll'>
                {/* Table */}
                <table className='w-full'>
                    <thead >
                        <tr className='text-center text-[.9rem] border-b-[2px] border-[#D84F67]'>
                            <td className='border-r-[2px] border-[#D84F67] mb-2 py-1'>Initial coins</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>Spend</td>
                            <td className='border-r-[2px] border-[#D84F67] py-1'>Remaining</td>
                            <td className='py-1'>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, ind) => (
                                <tr key={ind} className='text-[#8B8B8C] text-center text-[.9rem]'>
                                    <th className='py-5  font-normal'>{item?.Initial_Coins}</th>
                                    <th className='py-5  font-normal'>{item?.Spent}</th>
                                    <th className='py-5  font-normal'>{item?.Remaining}</th>
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

export default Coin_Sheet
