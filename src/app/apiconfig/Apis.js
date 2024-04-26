import axios from 'axios';
import Cookies from "js-cookie";
const token = Cookies?.get('token');
import { API_PATH } from './Apipath';


const BearerToken = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}

const GetTlData = async () => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiGetTlTabel, BearerToken);
        return response?.data?.customers
    } catch (error) {
        throw error
    }
}

const addtl = async (data) => {
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiAddTl, data, BearerToken);
        return response?.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

const edittl = async (customername, data) => {
    try {
        const response = await axios.put(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiUpdateTl + customername, data, BearerToken)
        return response?.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

const GetCoinSheet = async () => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiGetCoinList, BearerToken)
        return response?.data.coinLists
    } catch (error) {
        console.log(error)
        throw error
    }
}

const addCoin = async (coindata) => {
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.addCoinSheet, coindata, BearerToken)
        return response?.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

const editCoin = async (initialCoins, coindata) => {
    try {
        const response = await axios.put(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiEditCoinSheet + initialCoins, coindata, BearerToken)
        return response?.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

const GetBalanceSheet = async () => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiGetBalanceSheet, BearerToken)
        return response?.data.Employees
    } catch (error) {
        console.log(error)
        throw error
    }
}

const AddBalance = async (balancedata) => {
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiAddBalanceSheet, balancedata, BearerToken)
        return response?.data
    } catch (error) {
        throw error
    }
}

const EditBalance = async (employeeName, balancedata) => {
    try {
        const response = await axios.put(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiEditBalanceSheet + employeeName, balancedata, BearerToken)
        return response?.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

const GetAccountRecord=async()=>{
    try {
        const response=await axios.get(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiGetAccountRecords,BearerToken)
        return response?.data?.fbUsersList
    } catch (error) {
        console.log(error)
        throw error
    }
}

const AddAccount=async(accountdata)=>{
    try {
        const response=await axios.post(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiAddAccountRecord, accountdata, BearerToken)
        return response?.data
    } catch (error) {
       console.log(error)
       throw error        
    }
}

const EditAccount=async(userName, accountdata)=>{
    try {
        const response=await axios.put(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiEditAccountRecords + userName, accountdata, BearerToken)
        return response?.data
    } catch (error) {
       console.log(error)
       throw error        
    }
}

const GetFreshMessage=async()=>{
    try {
        const response=await axios.get(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiGetAgentFreshMessage, BearerToken)
        return response?.data?.freshMessageList
    } catch (error) {
        console.log(error)
        throw error
    }
}

const AddFreshMessage=async(data)=>{
    try {
        const response=await axios.post(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiAddFreshMessage, data,BearerToken)
        return response?.data
    } catch (error) {
       console.log(error)
       throw error        
    }
}

const EditFreshMessage=async(agentName,data)=>{
    try {
        const response = await axios.put(process.env.NEXT_PUBLIC_SERVER_BASE_URL+API_PATH.apiEditFreshMessage+agentName,data,BearerToken)
        return response?.data
    } catch (error) {
        console.log(error)
        throw error        
    }
}

const GetAgent=async(tabclicked)=>{
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiGetFreeToPlay + tabclicked, BearerToken)
        return response?.data?.agentList
    } catch (error) {
        console.log(error)
        throw error
    }
}

const AddAgent=async(tabclicked, data)=>{
    try {
        const response=await axios.post(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiAddAget + tabclicked, data, BearerToken)
        return response?.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

const EditAgent=async(tabclicked,agentName,data)=>{
    try {
        const response = await axios.put(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiUpdateAgent+tabclicked+'/'+agentName, data, BearerToken) 
        return response?.data
    } catch (error) {
        console.log(error)
        throw error        
    }
}

const Delete=async(deletedata)=>{
    try {
        const response = await axios.delete(process.env.NEXT_PUBLIC_SERVER_BASE_URL+deletedata,BearerToken)
        return response?.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

const LogOut=async(userWhoLogout)=>{
    try {
        const response=await axios.put(process.env.NEXT_PUBLIC_SERVER_BASE_URL+API_PATH.apiLogout,userWhoLogout,BearerToken)
        return response?.data
    } catch (error) {
        console.log(error)
        throw error         
    }
}

const login=async(logindata)=>{
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apilogin, logindata)
        return response?.data
    } catch (error) {
        console.log(error)
        throw error
    }
}


export 
{
    GetTlData,
    addtl,
    edittl,
    GetCoinSheet,
    addCoin,
    editCoin,
    GetBalanceSheet,
    AddBalance,
    EditBalance,
    GetAccountRecord,
    AddAccount,
    EditAccount,
    GetFreshMessage,
    AddFreshMessage,
    EditFreshMessage,
    GetAgent,
    AddAgent,
    EditAgent,
    Delete,
    LogOut,
    login
};