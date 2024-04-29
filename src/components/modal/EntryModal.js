import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { toast } from 'react-toastify';
import Loader from '../../app/utility/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { EditData, ModalType, UpdateTable } from '../../app/redux/ReduxSlice';
import Button from '../button/Button';
import InputField from '../input/InputField';
import { AddAccount, AddAgent, AddBalance, AddFreshMessage, EditAccount, EditAgent, EditBalance, EditFreshMessage, addCoin, addtl, editCoin, edittl } from '../../app/apiconfig/Apis';

const EntryModal = ({ modaltype,tabclicked }) => {
    const dispatch = useDispatch() //Dispatch From Redux
    const data = useSelector((state) => state.globlestate.EditData)
    const [load, setLoad] = useState(false) //Api Loading State
    const closeModal = () => {
        dispatch(ModalType(""))
        dispatch(EditData())
    }
    //TL
    const [tldata, setTlData] = useState({
        customerName: data?.customerName,
        gameName: data?.gameName,
        amount: data?.amount,
        accountName: data?.accountName,
        remarks: data?.remarks
    })

    const handelOnchange = (e) => {
        const { name, value } = e.target
        setTlData({ ...tldata, [name]: value })
    }
    const handleadddata = async () => {
        switch (true) {
            case !tldata.customerName:
                toast('Enter Customer Name', { type: 'error' });
                break;
            case !tldata.gameName:
                toast('Enter Game Name', { type: 'error' });
                break;
            case !tldata.amount:
                toast('Enter Amount', { type: 'error' });
                break;
            case !tldata.accountName:
                toast('Enter Account Name', { type: 'error' });
                break;
            case !tldata.remarks:
                toast('Enter Remark', { type: 'error' });
                break;
            default:
                try {
                    setLoad(true)
                    const response = await addtl(tldata)
                    if (response.status === true) {
                        toast(response.message, { type: 'success' })
                        closeModal()
                        dispatch(UpdateTable(true))
                    } else {
                        toast('Something went wrong', { type: 'error' })
                        closeModal()
                    }
                    setLoad(false)
                } catch (error) {
                    setLoad(false)
                }
                break;
        }
    }
    const EditTlData = async () => {
        try {
            const response = await edittl(tldata.customerName, tldata)
            if (response.status === true) {
                toast(response.message, { type: 'success' })
                closeModal()
                dispatch(UpdateTable(true))
            } else {
                toast("Something went wrong", { type: 'error' })
                closeModal()
            }
        } catch (error) {
        }
    }
    //TL

    //Balance Sheet
    const [balancedata, setBalancedata] = useState({
        employeeName: data?.employeeName,
        designation: data?.designation,
        salary: data?.salary,
        incentive: data?.incentive,
        totalSalary: data?.totalSalary,
        review: data?.review
    })

    const handelChange = (e) => {
        const { name, value } = e.target
        setBalancedata({ ...balancedata, [name]: value })
    }

    const handelAddBalanceSheet = async () => {
        switch (true) {
            case !balancedata.employeeName:
                toast('Enter Employee Name', { type: 'error' });
                break;
            case !balancedata.designation:
                toast('Enter Designation', { type: 'error' });
                break;
            case !balancedata.salary:
                toast('Enter Salary', { type: 'error' });
                break;
            case !balancedata.incentive:
                toast('Enter Incentive', { type: 'error' });
                break;
            case !balancedata.totalSalary:
                toast('Enter Total Salary', { type: 'error' });
                break;
            case !balancedata.review:
                toast('Enter Review', { type: 'error' });
                break;
            default:
                try {
                    setLoad(true)
                    const response = await AddBalance(balancedata)
                    if (response.status === true) {
                        toast(response.message, { type: 'success' })
                        closeModal()
                        dispatch(UpdateTable(true))
                    } else {
                        toast(response.error, { type: 'error' })
                        closeModal()
                    }
                    setLoad(false)
                } catch (error) {
                    setLoad(false)
                }
                break;

        }
    }
    const EditBalanceSheetData = async () => {
        try {
            const response = await EditBalance(balancedata?.employeeName, balancedata)
            if (response.status === true) {
                toast(response.message, { type: 'success' })
                closeModal()
                dispatch(UpdateTable(true))
            } else {
                toast(response.error, { type: 'error' })
                closeModal()
            }
        } catch (error) {

        }
    }
    //Balance Sheet

    //Account Record
    const [accountdata, setAccountdata] = useState({
        userName: data?.userName,
        password: data?.password,
        status: data?.status,
        fbLink: data?.fbLink,
        agentName: data?.agentName
    })

    const handelOnChange = (e) => {
        const { name, value } = e.target
        setAccountdata({ ...accountdata, [name]: value })
    }

    const handeladdaccountrecord = async () => {

        switch (true) {
            case !accountdata.userName:
                toast('Enter UserName', { type: 'error' });
                break;
            case !accountdata.password:
                toast('Enter Password', { type: 'error' });
                break;
            case !accountdata.status:
                toast('Enter Status', { type: 'error' });
                break;
            case !accountdata.fbLink:
                toast('Enter FaceBook Link', { type: 'error' });
                break;
            case !accountdata.agentName:
                toast('Enter Agent Name', { type: 'error' });
                break;
            default:
                try {
                    const response = await AddAccount(accountdata)
                    if (response.status === true) {
                        toast(response.message, { type: 'success' })
                        closeModal()
                        dispatch(UpdateTable(true))
                    } else {
                        toast(response.error, { type: 'error' })
                        closeModal()
                    }
                } catch (error) {

                }
                break;

        }

    }

    const handelaccountedit = async () => {
        try {
            const response = await EditAccount(data?.userName, accountdata)
            if (response.status === true) {
                toast(response.message, { type: 'success' })
                closeModal()
                dispatch(UpdateTable(true))
            } else {
                toast(response.error, { type: 'error' })
                closeModal()
            }
        } catch (error) {

        }
    }

    //Account Record

    //CoinSheet
    const [coindata, setCoinData] = useState({
        initialCoins: data?.initialCoins,
        spend: data?.spend,
        remaining: data?.remaining
    })

    const handelcoinChange = (e) => {
        const { name, value } = e.target
        setCoinData({ ...coindata, [name]: value })
    }

    const handelAddCoinSheet = async () => {
        switch (true) {
            case !coindata.initialCoins:
                toast("Enter Initial Coins", { type: 'error' });
                break;
            case !coindata.spend:
                toast("Enter Spend", { type: 'error' });
                break;
            case !coindata.remaining:
                toast("Enter Remaining", { type: 'error' });
                break;
            default:
                try {
                    setLoad(true)
                    const response = await addCoin(coindata)
                    if (response.status === true) {
                        toast(response.message, { type: 'success' })
                        closeModal()
                        dispatch(UpdateTable(true))
                    } else {
                        toast(response.error, { type: 'error' })
                        closeModal()
                    }
                    setLoad(false)
                } catch (error) {
                    setLoad(false)
                }
                break;

        }
    }

    const EditCoinSheetData = async () => {
        try {
            setLoad(true)
            const response = await editCoin(coindata?.initialCoins, coindata)
            if (response?.status === true) {
                toast(response.message, { type: 'success' })
                closeModal()
                dispatch(UpdateTable(true))
            } else {
                toast(response.error, { type: 'error' })
                closeModal()
            }
            setLoad(false)
        } catch (error) {
            setLoad(false)
        }
    }

    //CoinSheet

    //Agent Fresh Message
    const [messagedata, setMessageData] = useState({
        agentName: data?.agentName,
        systemNumber: data?.systemNumber,
        accountName: data?.accountName,
        playerId: data?.playerId,
        remarks: data?.remarks
    })
    const handelMessageChange = (e) => {
        const { name, value } = e.target
        setMessageData({ ...messagedata, [name]: value })
    }
    const handelAddFreshMessage = async () => {
        switch (true) {
            case !messagedata.agentName:
                toast('Enter Agent Name', { type: 'error' });
                break;
            case !messagedata.systemNumber:
                toast('Enter System Number', { type: 'error' });
                break;
            case !messagedata.accountName:
                toast('Enter Account Name', { type: 'error' });
                break;
            case !messagedata.playerId:
                toast('Enter Player Id', { type: 'error' });
                break;
            case !messagedata.remarks:
                toast('Enter Remark', { type: 'error' });
                break;
            default:
                try {
                    setLoad(true)
                    const response = await AddFreshMessage(messagedata)
                    if (response?.status === true) {
                        toast(response.message, { type: 'success' })
                        closeModal()
                        dispatch(UpdateTable(true))
                    }
                    setLoad(false)
                } catch (error) {
                    setLoad(false)
                }
                break;
        }
    }
    const EditFreshmessageData = async () => {
        try {
            const response = await EditFreshMessage(messagedata.agentName, messagedata)
            if (response.status === true) {
                toast(response.message, { type: 'success' })
                closeModal()
                dispatch(UpdateTable(true))
            } else {
                toast("Something went wrong", { type: 'error' })
                closeModal()
            }
        } catch (error) {

        }
    }
    //Agent Fresh Message

    //Agent
    const [agentdata, setAgentData] = useState({
        agentName: data?.agentName,
        customerName: data?.customerName,
        gameName: data?.gameName,
        amountOfCoins: data?.amountOfCoins,
        accountName: data?.accountName,
        remarks: data?.remarks
    })

    const handelagentChange = (e) => {
        const { name, value } = e.target
        setAgentData({ ...agentdata, [name]: value })
    }

    const handelAddagent = async () => {
        switch (true) {
            case !agentdata.agentName:
                toast('Enter Agent Name', { type: 'error' });
                break;
            case !agentdata.customerName:
                toast('Enter Customer Name', { type: 'error' });
                break;
            case !agentdata.gameName:
                toast('Enter Game Name', { type: 'error' });
                break;
            case !agentdata.amountOfCoins:
                toast('Enter Coins Amount', { type: 'error' });
                break;
            case !agentdata.accountName:
                toast('Enter Account Name', { type: 'error' });
                break;
            case !agentdata.remarks:
                toast('Enter Remarks', { type: 'error' });
                break;
            default:
                try {
                    setLoad(true)
                    const response = await AddAgent(tabclicked, agentdata)
                    if (response.status === true) {
                        toast(response.message, { type: 'success' })
                        closeModal()
                        dispatch(UpdateTable(true))
                    } else {
                        toast(response.error, { type: 'error' })
                        closeModal()
                    }
                    setLoad(false)
                } catch (error) {
                    setLoad(false)
                }
                break;
        }
    }

    const EditAgentData = async () => {
        try {
            setLoad(true)
            const response = await EditAgent(tabclicked, agentdata?.agentName, agentdata)
            if (response.status === true) {
                toast('Agent Updated Successfuly', { type: 'success' })
                closeModal()
                dispatch(UpdateTable(true))
            } else {
                toast("Something went wrong", { type: 'error' })
                closeModal()
            }
            setLoad(false)
        } catch (error) {
            setLoad(false)
        }
    }
    //Agent

    const inputData = [
        {
            tl: [
                {
                    labelname: 'Customer name',
                    type: 'text',
                    name: 'customerName',
                    value: tldata.customerName
                },
                {
                    labelname: 'Game name',
                    type: 'text',
                    name: 'gameName',
                    value: tldata.gameName
                },
                {
                    labelname: 'Amount',
                    type: 'text',
                    name: 'amount',
                    value: tldata.amount
                },
                {
                    labelname: 'Account name',
                    type: 'text',
                    name: 'accountName',
                    value: tldata.accountName
                },
                {
                    labelname: 'Remark',
                    type: 'text',
                    name: 'remarks',
                    value: tldata.remarks
                },

            ]
        },
        {
            balancesheet: [
                {
                    labelname: 'Employe name',
                    type: 'text',
                    name: 'employeeName',
                    value: balancedata.employeeName
                },
                {
                    labelname: 'Designation',
                    type: 'text',
                    name: 'designation',
                    value: balancedata.designation
                },
                {
                    labelname: 'Salary',
                    type: 'text',
                    name: 'salary',
                    value: balancedata.salary
                },
                {
                    labelname: 'Incentive',
                    type: 'text',
                    name: 'incentive',
                    value: balancedata.incentive
                },
                {
                    labelname: 'Total Salary',
                    type: 'text',
                    name: 'totalSalary',
                    value: balancedata.totalSalary
                },
                {
                    labelname: 'Review',
                    type: 'text',
                    name: 'review',
                    value: balancedata.review
                }

            ]
        },
        {
            accountrecord: [
                {
                    labelname: 'User Name',
                    type: 'text',
                    name: 'userName',
                    value: accountdata.userName
                },
                {
                    labelname: 'Password',
                    type: 'text',
                    name: 'password',
                    value: accountdata.password
                },
                {
                    labelname: 'Status',
                    type: 'text',
                    name: 'status',
                    value: accountdata.status
                },
                {
                    labelname: 'FB Account Link',
                    type: 'text',
                    name: 'fbLink',
                    value: accountdata.fbLink
                },
                {
                    labelname: 'Agent Name Using This FB Account',
                    type: 'text',
                    name: 'agentName',
                    value: accountdata.agentName
                }
            ]
        },
        {
            coinsheet: [
                {
                    labelname: 'Initial coins',
                    type: 'text',
                    name: 'initialCoins',
                    value: coindata.initialCoins
                },
                {
                    labelname: 'Spend',
                    type: 'text',
                    name: 'spend',
                    value: coindata.spend
                },
                {
                    labelname: 'Remaining',
                    type: 'text',
                    name: 'remaining',
                    value: coindata.remaining
                }
            ]
        },
        {
            freshmessage: [
                {
                    labelname: 'Agent Name',
                    type: 'text',
                    name: 'agentName',
                    value: messagedata.agentName
                },
                {
                    labelname: 'System Number',
                    type: 'text',
                    name: 'systemNumber',
                    value: messagedata.systemNumber
                },
                {
                    labelname: 'Account Name',
                    type: 'text',
                    name: 'accountName',
                    value: messagedata.accountName
                },
                {
                    labelname: 'Player ID/Receivers FB ID',
                    type: 'text',
                    name: 'playerId',
                    value: messagedata.playerId
                },
                {
                    labelname: 'Remark',
                    type: 'text',
                    name: 'remarks',
                    value: messagedata.remarks
                }
            ]
        },
        {
            agent: [
                {
                    labelname: 'Agent Name',
                    type: 'text',
                    name: 'agentName',
                    value: agentdata.agentName
                },
                {
                    labelname: 'Customer Name/FB ID',
                    type: 'text',
                    name: 'customerName',
                    value: agentdata.customerName
                },
                {
                    labelname: 'Game Name',
                    type: 'text',
                    name: 'gameName',
                    value: agentdata.gameName
                },
                {
                    labelname: 'Amount Of Coins',
                    type: 'text',
                    name: 'amountOfCoins',
                    value: agentdata.amountOfCoins
                },
                {
                    labelname: 'Account Name',
                    type: 'text',
                    name: 'accountName',
                    value: agentdata.accountName
                },
                {
                    labelname: 'Remarks',
                    type: 'text',
                    name: 'remarks',
                    value: agentdata.remarks
                }
            ]
        },
    ]

    return (
        <>
            <Transition appear show={true} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full relative max-w-5xl transform overflow-hidden rounded-xl border-[2px] border-[#00A5FF] bg-[#2A2A2B] p-6 text-left align-middle shadow-xl transition-all">
                                    <div className='grid grid-cols-12 gap-4'>
                                        {
                                            inputData?.map((item) => (
                                                modaltype === 'tl' &&
                                                item?.tl?.map((subitem, subind) => (
                                                    <div key={subind} className='col-span-3'>
                                                        <div className='text-white text-[.9rem] pb-1'>{subitem?.labelname}</div>
                                                        <InputField Type={subitem?.type} Name={subitem?.name} Value={subitem.value} changeEvent={(e) => handelOnchange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'} />
                                                    </div>
                                                ))
                                            ))
                                        }

                                        {
                                            modaltype === 'balancesheet' &&
                                            inputData?.map((item) => (
                                                item?.balancesheet?.map((subitem, subind) => (
                                                    <div key={subind} className='col-span-3'>
                                                        <div className='text-white text-[.9rem] pb-1'>{subitem?.labelname}</div>
                                                        <InputField Type={subitem?.type} Name={subitem?.name} Value={subitem.value} changeEvent={(e) => handelChange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'} />
                                                    </div>
                                                ))
                                            ))
                                        }

                                        {
                                            modaltype === 'account' &&
                                            inputData?.map((item) => (
                                                item?.accountrecord?.map((subitem, subind) => (
                                                    <div key={subind} className='col-span-3'>
                                                        <div className='text-white text-[.9rem] pb-1'>{subitem?.labelname}</div>
                                                        <InputField Type={subitem?.type} Name={subitem?.name} Value={subitem.value} changeEvent={(e) => handelOnChange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'} />
                                                    </div>
                                                ))
                                            ))
                                        }

                                        {
                                            modaltype === 'coinsheet' &&
                                            inputData?.map((item) => (
                                                item?.coinsheet?.map((subitem, subind) => (
                                                    <div key={subind} className='col-span-3'>
                                                        <div className='text-white text-[.9rem] pb-1'>{subitem?.labelname}</div>
                                                        <InputField Type={subitem?.type} Name={subitem?.name} Value={subitem.value} changeEvent={(e) => handelcoinChange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'} />
                                                    </div>
                                                ))
                                            ))
                                        }

                                        {
                                            modaltype === 'freshmessage' &&
                                            inputData?.map((item) => (
                                                item?.freshmessage?.map((subitem, subind) => (
                                                    <div key={subind} className='col-span-3'>
                                                        <div className='text-white text-[.9rem] pb-1'>{subitem?.labelname}</div>
                                                        <InputField Type={subitem?.type} Name={subitem?.name} Value={subitem.value} changeEvent={(e) => handelMessageChange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'} />
                                                    </div>
                                                ))
                                            ))
                                        }

                                        {
                                            modaltype === 'agent' &&
                                            inputData?.map((item) => (
                                                item?.agent?.map((subitem, subind) => (
                                                    <div key={subind} className='col-span-3'>
                                                        <div className='text-white text-[.9rem] pb-1'>{subitem?.labelname}</div>
                                                        <InputField Type={subitem?.type} Name={subitem?.name} Value={subitem.value} changeEvent={(e) => handelagentChange(e)} styles={'bg-[#D9D9D9] text-[.9rem] py-1 px-2 rounded-sm outline-none w-full'} />
                                                    </div>
                                                ))
                                            ))
                                        }
                                    </div>
                                    {/* Add */}
                                    <div className='pt-5 flex justify-center'>
                                        <Button clickevent={
                                            data ? (modaltype === 'tl' ? EditTlData : modaltype === 'balancesheet' ? EditBalanceSheetData : modaltype === 'account' ? handelaccountedit : modaltype === 'coinsheet' ? EditCoinSheetData : modaltype === 'freshmessage' ? EditFreshmessageData :modaltype === 'agent' ? EditAgentData : null)
                                                : (modaltype === 'tl' ? handleadddata : modaltype === 'balancesheet' ? handelAddBalanceSheet : modaltype === 'account' ? handeladdaccountrecord : modaltype === 'coinsheet' ? handelAddCoinSheet : modaltype === 'freshmessage' ? handelAddFreshMessage : modaltype === 'agent' ? handelAddagent: null)}
                                            style={'gradient-red text-white px-5 py-1 rounded-md hover:scale-90 transition-all'} text={'Add'} />
                                    </div>
                                    {/* Close Icon */}
                                    <IoMdClose onClick={closeModal} size={25} className='absolute top-1 cursor-pointer hover:scale-105 transition-all z-10 gradient-red rounded-full right-3' />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <Loader show={load} />
        </>
    )
}

export default EntryModal
