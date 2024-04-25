import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { API_PATH } from '../../app/apiconfig/Apipath'
import Loader from '../../app/utility/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateTable } from '../../app/redux/ReduxSlice'
import Coin_Sheet_Modal from './Coin_Sheet_Modal'
import Delete_Modal from '../delete/Delete_Modal'
import { GetCoinSheet } from '../../app/apiconfig/Apis'

const Coin_Sheet = () => {

    const dispatch = useDispatch() //useDispatch 
    const state = useSelector((state) => state.globlestate.TableState) //Geting Updated State From Redux

    //Get Coin Sheet Data Api
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false) //Api Loading State
    const handelGetCoinList = async () => {
        try {
            setLoad(true)
            const response = await GetCoinSheet()
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
        handelGetCoinList()
    }, [state])

    //Edit Coins Data
    const [editcoin, setEditCoin] = useState()
    const closecoinsheet = (state) => {
        setEditCoin(state)
    }

    //Delete Coins Data
    const [deletedata, setDeleteData] = useState()
    const closedeletemodal = (state) => {
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
                                <td className='border-r-[2px] border-[#D84F67] mb-2 py-1'>Initial coins</td>
                                <td className='border-r-[2px] border-[#D84F67] py-1'>Spend</td>
                                <td className='border-r-[2px] border-[#D84F67] py-1'>Remaining</td>
                                <td className='py-1'>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item, ind) => (
                                    <tr key={ind} className='text-[#8B8B8C] text-center text-[100%]'>
                                        <th className='py-5  font-normal'>{item?.initialCoins}</th>
                                        <th className='py-5  font-normal'>{item?.spend}</th>
                                        <th className='py-5  font-normal'>{item?.remaining}</th>
                                        <th className='py-5  font-normal'>
                                            <div className='flex items-center justify-center space-x-2'>
                                                <FaEdit onClick={() => setEditCoin(item)} size={20} className='cursor-pointer hover:scale-125 hover:text-blue-500 transition-all' />
                                                <MdDelete onClick={() => setDeleteData(item?.initialCoins)} size={20} className='cursor-pointer hover:scale-125 hover:text-red-500 transition-all' />
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
            {editcoin && <Coin_Sheet_Modal editcoin={editcoin} closecoinsheet={closecoinsheet} />}
            {deletedata && <Delete_Modal closedeletemodal={closedeletemodal} deletedata={API_PATH.apiDeleteCoinSheet + deletedata} />}
        </>
    )
}

export default Coin_Sheet
