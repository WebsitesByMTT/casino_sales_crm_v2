import axios from 'axios';
import Cookies from "js-cookie";
const token = Cookies.get("token");
import { API_PATH } from './Apipath';


const BearerToken={
    headers: {
        Authorization: `Bearer ${token}`
    }
}
const GetTlData = async () => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiGetTlTabel,BearerToken);
          return response?.data?.customers
    } catch (error) {
        throw error
    }
}

const addtl=async(data)=>{
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiAddTl, data,BearerToken);
        return response?.data
    } catch (error) {
        console.log(error)
         throw error       
    }
}

const edittl=async(customername,data)=>{
    try {
        const response = await axios.put(process.env.NEXT_PUBLIC_SERVER_BASE_URL+API_PATH.apiUpdateTl+customername,data,BearerToken)
        return response?.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

const GetCoinSheet=async()=>{
    try {
        const response=await axios.get(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiGetCoinList, BearerToken)
        return response?.data.coinLists
    } catch (error) {
        console.log(error)
        throw error
    }
}

const addCoin=async(coindata)=>{
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.addCoinSheet, coindata, BearerToken)
        return response?.data
    } catch (error) {
        console.log(error)
       throw error        
    }
}

const editCoin=async(initialCoins,coindata)=>{
    try {
        const response = await axios.put(process.env.NEXT_PUBLIC_SERVER_BASE_URL+API_PATH.apiEditCoinSheet+initialCoins,coindata,BearerToken)
        return response?.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

const GetBalanceSheet=async()=>{
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_SERVER_BASE_URL + API_PATH.apiGetBalanceSheet,BearerToken)
        return response?.data.Employees
    } catch (error) {
        console.log(error)
        throw error
    }
}

const AddBalance=async(balancedata)=>{
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_SERVER_BASE_URL+ API_PATH.apiAddBalanceSheet, balancedata,BearerToken)
        return response?.data
    } catch (error) {
        throw error
    }
}

export {GetTlData,addtl,edittl,GetCoinSheet,addCoin,editCoin,GetBalanceSheet,AddBalance};